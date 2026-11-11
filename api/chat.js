
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { message } = req.body || {};

    if (
      typeof message !== "string" ||
      !message.trim() ||
      message.length > 2000
    ) {
      return res.status(400).json({
        error: "Please enter a message (maximum 2000 characters).",
      });
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      instructions:
        "You are CyberShield AI Assistant. Help users with cybersecurity, online safety, digital privacy, password protection, phishing awareness, and cyber threats. Give clear, beginner-friendly and safe advice. Do not help with hacking, stealing passwords, malware, or harming others. If a question is outside cybersecurity, politely guide the user back to your topic.",
      input: message.trim(),
    });

    return res.status(200).json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return res.status(500).json({
      error: "Sorry, the assistant is temporarily unavailable. Please try again.",
    });
  }
};
