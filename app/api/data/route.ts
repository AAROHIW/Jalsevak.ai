import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { calculateVibeScore } from '@/lib/hydra-logic';

export async function POST(request: Request) {
  try {
    // 1. Receive the raw data from Postman or Som's Hardware
    const body = await request.json();
    
    // Destructure based on your NEW Supabase schema
    const { 
      ph_level, 
      turbidity, 
      metal_concentration, 
      conductivity, 
      location, 
      machine_id 
    } = body;

    // 2. The Brain: Run the HMPI logic
    // Ensure we handle "undefined" to avoid the null HMPI error
    const vibe = calculateVibeScore(
      metal_concentration || 0, 
      ph_level || 7, 
      turbidity || 0
    );

    // 3. The Database: Insert into the 'water_samples' table
    const { data, error } = await supabase
      .from('water_samples')
      .insert([
        { 
          ph_level, 
          turbidity, 
          metal_concentration, 
          conductivity,
          location: location || "Unknown Location",
          machine_id: machine_id || "JALSEVAK-PROTOTYPE",
          hmpi_score: vibe.score,
          status: vibe.status 
        }
      ])
      .select();

    if (error) {
      console.error("Supabase Insert Error:", error.message);
      throw error;
    }

    // 4. Respond with the calculated values so Som's hardware can log it
    return NextResponse.json({ 
      success: true, 
      hmpi: vibe.score,
      status: vibe.status,
      received: data[0].id
    }, { status: 201 });

  } catch (err: any) {
    console.error("Hydra Gatekeeper Error:", err.message);
    return NextResponse.json({ 
      error: "Vibe Check Failed", 
      details: err.message 
    }, { status: 500 });
  }
}