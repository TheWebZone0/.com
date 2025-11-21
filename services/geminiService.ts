import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize Gemini Client
// Note: In a real production app, you might want to proxy this through a backend 
// to hide the key, or ask the user to input their key for a demo.
// Per instructions, we assume process.env.API_KEY is available.

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Adham Ahmed's personal portfolio website.
Your role is to answer questions about Adham's professional background, skills, and experience as a Web Developer.

Here is Adham's Profile:
- Name: Adham Ahmed
- Role: Senior Web Developer (Full Stack)
- Contact: 01091569465, https://wa.me/201091569465
- Core Skills: HTML, CSS, JavaScript, React, TypeScript, Node.js, Firebase, Tailwind CSS, UI/UX Design.
- Experience: Specialized in building responsive, high-performance web applications, custom systems, and visually stunning front-end interfaces.
- Services: Front-End Development, Back-End Development, Full Website Creation, UI/UX Implementation, System Development.
- Personality: Professional, detail-oriented, passionate about clean code and modern design.

Guidelines:
- Keep answers concise, professional, and friendly.
- If asked to hire Adham, direct them to the WhatsApp link or Contact form.
- Do not make up facts not present in this profile.
- You are representing Adham, so be polite and enthusiastic.
`;

export const chatWithAdhamAI = async (message: string, history: {role: 'user' | 'model', text: string}[] = []) => {
  if (!API_KEY) {
    return "I'm sorry, my brain (API Key) is currently offline. Please contact Adham directly via WhatsApp!";
  }

  try {
    const model = 'gemini-2.5-flash'; 
    
    // Construct history for context
    // We strictly use the generateContent with systemInstruction for simplicity in this stateless demo.
    const historyText = history.map(h => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.text}`).join('\n');
    const fullPrompt = `${SYSTEM_INSTRUCTION}\n\nConversation History:\n${historyText}\n\nCurrent Question: ${message}`;

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [{ text: fullPrompt }]
      }, 
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};