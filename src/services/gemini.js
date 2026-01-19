/*
 * Gemini API Service
 * 
 * Note: Requires an API KEY to function.
 * Use the 'analyzeImage' function to send base64 image data to the model.
 */

// import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "YOUR_API_KEY_HERE"; // TODO: Replace with user provided key

// const genAI = new GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const analyzeImage = async (file) => {
    if (API_KEY === "YOUR_API_KEY_HERE") {
        console.warn("Gemini API Key is missing.");
        // Return mock data for demo purposes if no key
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    bankName: "카카오뱅크 (데모)",
                    productName: "26주 적금",
                    interestRate: 6.0,
                    amount: 1000000,
                    maturityDate: "2024-12-31"
                });
            }, 1500);
        });
    }

    /* Real Implementation (Commented out until Key is provided)
    try {
      const base64Data = await fileToGenerativePart(file);
      const prompt = `
        Analyze this bank account/savings screenshot. 
        Extract the following fields in JSON format:
        - bankName (String)
        - productName (String)
        - interestRate (Number, percentage)
        - amount (Number, principal amount)
        - maturityDate (String, YYYY-MM-DD format)
        
        If a field is missing, make a best guess or return null.
        Return ONLY raw JSON.
      `;
  
      const result = await model.generateContent([prompt, base64Data]);
      const response = await result.response;
      const text = response.text();
      return JSON.parse(text.replace(/```json|```/g, ''));
    } catch (error) {
      console.error("Gemini Analysis Failed:", error);
      throw error;
    }
    */
};

// Helper to convert File to Base64 for Gemini
async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
    });
    return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
}
