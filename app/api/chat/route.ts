import { NextRequest, NextResponse } from 'next/server';

const RHIM_INFO = `
You are "Rex", Rhim Khan's personal AI portfolio assistant. 
Be friendly, concise, and enthusiastic. Always answer in the same 
language the user writes in (Hindi/English/Hinglish).

ABOUT RHIM KHAN:
- Full Name: Rhim Khan  
- Role: AI/ML Student & Full Stack Developer
- Education: B.Tech in AI & ML, Amity University Gwalior (3rd Year)
- Internship: 4-week AI Internship at Codtech IT Solutions
- GitHub: github.com/Rhimkhan
- LinkedIn: linkedin.com/in/rhimkhan
- Email: rhim78975730@gmail.com

SKILLS:
- Languages: C++, C, Python, Java
- AI/ML: Machine Learning, Computer Vision, NLP, DSA
- Web Dev: React, Node.js, Express, MongoDB, REST APIs
- Tools: Flask, Git & GitHub, Vercel

PROJECTS:
1. Personal Portfolio Website — React (Vite) + Node.js/Express + MongoDB, live on Vercel
2. Object Detection API — Flask + YOLOv8 real-time detection
3. Real-Time Sentiment Analysis — Python NLP pipeline for real-time text classification
4. House Price Predictor — Regression ML model
5. Titanic Survival Prediction — Classification model

Keep responses under 3-4 sentences unless asked for details.
`;

function getLocalFallbackAnswer(prompt: string): string {
  const p = prompt.toLowerCase();

  if (p.includes('summary') || p.includes('about') || p.includes('who is') || p.includes('kaun hai')) {
    return "Rhim Khan is an AI/ML student and Full Stack Developer pursuing his B.Tech in AI & ML at Amity University Gwalior (3rd Year). He specializes in Machine Learning, Computer Vision, and full-stack web applications using React, Node.js, and Python.";
  }
  if (p.includes('project') || p.includes('kam') || p.includes('work')) {
    return "Rhim Khan has built several impactful projects including: 1) An Object Detection API with YOLOv8 & Flask, 2) A Real-Time NLP Sentiment Analysis pipeline, 3) Full-Stack Portfolio with React & Node.js, and 4) ML prediction models (House Price & Titanic Survival).";
  }
  if (p.includes('skill') || p.includes('tech') || p.includes('technologies')) {
    return "His technical arsenal includes C++, Python, C, Java, Machine Learning, Computer Vision, NLP, DSA, along with full-stack web technologies like React, Node.js, Express, MongoDB, and Flask.";
  }
  if (p.includes('education') || p.includes('college') || p.includes('university') || p.includes('study')) {
    return "Rhim Khan is currently in his 3rd year pursuing B.Tech in Artificial Intelligence & Machine Learning at Amity University Gwalior.";
  }
  if (p.includes('contact') || p.includes('email') || p.includes('reach') || p.includes('hire')) {
    return "You can reach Rhim Khan directly via email at rhim78975730@gmail.com, on LinkedIn at linkedin.com/in/rhimkhan, or view his code on GitHub at github.com/Rhimkhan.";
  }

  return "Rhim Khan is an AI/ML engineer & Full-Stack Developer skilled in Python, React, YOLOv8, and Machine Learning. Ask me about his projects, skills, education, or how to contact him!";
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.ANTHROPIC_API_KEY;
    const latestUserMessage = messages[messages.length - 1]?.content || '';

    // If API key is set, call Anthropic Claude API
    if (apiKey && apiKey !== 'your_api_key_here') {
      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-3-5-haiku-20241022',
            max_tokens: 500,
            system: RHIM_INFO,
            messages: messages,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data?.content?.[0]?.text) {
            return NextResponse.json({
              content: data.content[0].text,
            });
          }
        }
      } catch (apiError) {
        console.warn('Anthropic API fetch failed, falling back to local model:', apiError);
      }
    }

    // Graceful offline fallback grounded in RHIM_INFO
    const fallbackText = getLocalFallbackAnswer(latestUserMessage);
    return NextResponse.json({
      content: fallbackText,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { content: 'Sorry, I encountered an issue. Please try again!' },
      { status: 200 }
    );
  }
}
