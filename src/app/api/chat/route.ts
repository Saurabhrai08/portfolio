import { NextResponse } from "next/server";
import { chatbotKnowledge, getFallbackChatResponse } from "@/lib/portfolio-data";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = body.messages ?? [];
    const latestMessage = messages.at(-1)?.content?.trim() ?? "";

    if (!latestMessage) {
      return NextResponse.json({ answer: getFallbackChatResponse("") });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";

    if (!apiKey) {
      return NextResponse.json({ answer: getFallbackChatResponse(latestMessage) });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        input: [
          {
            role: "system",
            content: [
              {
                type: "input_text",
                text: `You are the AI portfolio assistant for Saurabh Rai. Answer only from the provided portfolio context. Keep responses concise, professional, and factual. If something is not in the context, say that the portfolio does not provide that detail.\n\nPortfolio Context:\n${chatbotKnowledge}`,
              },
            ],
          },
          ...messages.map((message) => ({
            role: message.role,
            content: [{ type: "input_text", text: message.content }],
          })),
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ answer: getFallbackChatResponse(latestMessage) });
    }

    const data = (await response.json()) as {
      output_text?: string;
    };

    return NextResponse.json({
      answer: data.output_text ?? getFallbackChatResponse(latestMessage),
    });
  } catch {
    return NextResponse.json({
      answer:
        "Saurabh Rai is an aspiring AI/ML Engineer with hands-on experience in machine learning, deep learning, and computer vision.",
    });
  }
}
