import { GoogleGenAI } from "@google/genai";

export type ProductAnalysis = {
  productName: string;
  description: string;
  category: string[];
  targetAudience: string[];
  useCases: string[];
  keywords: string[];
  productType: string;
};

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function analyzeProduct(
  websiteContent: string
): Promise<ProductAnalysis> {
  const prompt = `
You are analyzing a SaaS/product website for Outship.

Your job is to understand the product so we can recommend the most relevant
launch directories for it.

Analyze the website content below.

Return ONLY valid JSON.
Do not use markdown.
Do not include any explanation outside the JSON.

Use exactly this structure:

{
  "productName": "string",
  "description": "string",
  "category": ["string"],
  "targetAudience": ["string"],
  "useCases": ["string"],
  "keywords": ["string"],
  "productType": "string"
}

Rules:
- productName: actual product name
- description: concise description of what the product does
- category: 3-5 relevant categories
- targetAudience: 3-5 audiences
- useCases: 3-5 concrete use cases
- keywords: 8-15 highly relevant keywords
- productType: concise classification such as SaaS, AI SaaS, developer tool,
  productivity tool, marketplace, mobile app, etc.

Website content:
${websiteContent.slice(0, 30000)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: prompt,
  });

  const text = response.text;

  if (!text) {
    throw new Error("Gemini returned an empty response");
  }

  try {
    return JSON.parse(text) as ProductAnalysis;
  } catch {
    console.error("Invalid Gemini JSON:", text);
    throw new Error("Gemini returned invalid analysis data");
  }
}