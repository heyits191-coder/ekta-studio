import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignConsultation = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are the 'Atelier Concierge' for Palak Sahni Interiors, a super-premium, luxury interior design studio in Delhi NCR. 
        Your tone is:
        - Calm, sophisticated, and understated.
        - Confident but never arrogant.
        - Minimalist in your expression, like the designs we create.
        - Warm and inviting, yet exclusive.
        
        The user is a potential client asking for design advice or inquiring about the studio.
        Provide a brief, curated, and elegant response (max 100 words). 
        Focus on concepts of "breathing space", "timeless materials", "light", and "curated living".
        Do not use emojis. Do not be salesy. Treat the user like a guest in a high-end gallery.
        If they ask for specific pricing, politely invite them for a private consultation instead.`,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, but I am unable to connect with our design archives at the moment. Please try again shortly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};