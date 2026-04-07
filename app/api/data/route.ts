import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { calculateVibeScore } from '@/lib/hydra-logic';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Get the data + the USER'S INTENT from Postman
    const { ph_level, turbidity, metal_concentration, location, intent } = body;

    // 2. Calculate HMPI
    const vibe = calculateVibeScore(metal_concentration || 0, ph_level || 7, turbidity || 0);

    // 3. The AI Consultant Logic
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const aiPrompt = `
      Location: ${location || 'Pune River'}. 
      HMPI Score: ${vibe.score} (Status: ${vibe.status}). 
      User Intent: ${intent || 'General observation'}.
      Based on the HMPI score, give a 2-sentence expert recommendation on whether the user can proceed with their intent and what the specific risk is.
    `;

    const result = await model.generateContent(aiPrompt);
    const aiAdvice = result.response.text();

    // 4. Save to Supabase (so Arnav's UI still works)
    await supabase.from('water_samples').insert([{ 
      ph_level, turbidity, metal_concentration, 
      location, hmpi_score: vibe.score, status: vibe.status 
    }]);

    // 5. The BIG Response to Postman
    return NextResponse.json({ 
      success: true, 
      hmpi: vibe.score,
      status: vibe.status,
      ai_consultant: aiAdvice // This is what the judge will see!
    }, { status: 201 });

  } catch (err: any) {
    return NextResponse.json({ error: "System Error", details: err.message }, { status: 500 });
  }
}