import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { calculateVibeScore } from '@/lib/hydra-logic';

export async function POST(request: Request) {
  try {
    // 1. Receive the raw data from Som's Hardware
    const body = await request.json();
    const { ph, turbidity, metal_conc } = body;

    // 2. The Brain: Run the HMPI logic you and Aarohi defined
    const vibe = calculateVibeScore(metal_conc, ph, turbidity);

    // 3. The Database: Insert the processed data into Supabase
    const { data, error } = await supabase
      .from('water_data')
      .insert([
        { 
          ph_level: ph, 
          turbidity: turbidity, 
          metal_concentration: metal_conc, 
          hmpi_score: vibe.score,
          status: vibe.status 
        }
      ])
      .select();

    if (error) throw error;

    // 4. Respond to Som's hardware so it knows the mission was successful
    return NextResponse.json({ 
      success: true, 
      hmpi: vibe.score,
      status: vibe.status 
    }, { status: 201 });

  } catch (err: any) {
    console.error("Hydra Gatekeeper Error:", err.message);
    return NextResponse.json({ error: "Vibe Check Failed", details: err.message }, { status: 500 });
  }
}