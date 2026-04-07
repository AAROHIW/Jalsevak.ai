import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { calculateVibeScore } from '@/lib/hydra-logic';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Brain with your Vercel Environment Variable
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Destructure all fields from Postman/Hardware
    const { 
      ph_level, 
      turbidity, 
      metal_concentration, 
      location, 
      intent, 
      conductivity, 
      machine_id 
    } = body;

    // 2. Calculate the HMPI Score using your hydra-logic
    const vibe = calculateVibeScore(
      metal_concentration || 0, 
      ph_level || 7, 
      turbidity || 0
    );

    // 3. The AI Consultant Layer (Gemini 3.5 Flash)
    let aiAdvice = "Consultant is currently analyzing the environmental impact...";
    
    try {
      // Using the latest 3.5 Flash model for 2026 performance
      const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
      
      const aiPrompt = `
        You are the Jalsevak AI Water Consultant. 
        Analyze this Pune water data:
        - Location: ${location || 'Unknown'}
        - HMPI: ${vibe.score}
        - Status: ${vibe.status}
        - User Intent: ${intent || 'General Safety Check'}

        Provide a 2-sentence professional assessment. Mention if they can proceed with their intent and one specific scientific risk.
      `;

      const result = await model.generateContent(aiPrompt);
      aiAdvice = result.response.text();
    } catch (aiError) {
      console.error("AI Generation Failed:", aiError);
      aiAdvice = "The AI Consultant is temporarily recalibrating, but your HMPI data is live.";
    }

    // 4. Save to Supabase (Syncs with Arnav's UI)
    const { error: dbError } = await supabase
      .from('water_samples')
      .insert([
        { 
          ph_level, 
          turbidity, 
          metal_concentration, 
          conductivity: conductivity || 0,
          location: location || "Pune Main Stream",
          machine_id: machine_id || "SV-PROTOTYPE",
          hmpi_score: vibe.score,
          status: vibe.status 
        }
      ]);

    if (dbError) throw dbError;

    // 5. The "Full Stack" Response for the Judges
    return NextResponse.json({ 
      success: true, 
      hmpi: vibe.score,
      status: vibe.status,
      ai_consultant: aiAdvice.trim(),
      timestamp: new Date().toISOString()
    }, { status: 201 });

  } catch (err: any) {
    console.error("Gatekeeper Critical Error:", err.message);
    return NextResponse.json({ 
      error: "Vibe Check Failed", 
      details: err.message 
    }, { status: 500 });
  }
}