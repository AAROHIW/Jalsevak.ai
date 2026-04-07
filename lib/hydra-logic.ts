// Standard Limits (WHO/Indian Standard)
const LIMITS = {
  lead: 0.01,    // mg/L
  cadmium: 0.003,
  copper: 0.05,
  zinc: 5.0
};

export function calculateVibeScore(raw_metal: number, ph: number, turbidity: number) {
  // 1. Calculate base HMPI (Ratio of concentration to limit)
  // We'll use 0.01 as a baseline for "Heavy Metal"
  const hmpi = (raw_metal / 0.01) * 100;

  // 2. Adjust for pH (Toxicity often increases in acidic water)
  let multiplier = 1.0;
  if (ph < 6.5) multiplier = 1.2; // Acidic
  if (ph > 8.5) multiplier = 1.1; // Highly Alkaline

  const finalScore = hmpi * multiplier;

  // 3. Determine Status
  let status = "EXCELLENT";
  let color = "#10b981"; // Emerald

  if (finalScore > 50) {
    status = "WARNING";
    color = "#f59e0b"; // Amber
  }
  if (finalScore > 100) {
    status = "DANGER";
    color = "#ef4444"; // Red
  }

  return { 
    score: Math.round(finalScore), 
    status, 
    color,
    timestamp: new Date().toISOString()
  };
}