import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'sk-proj-...', // your actual key
  dangerouslyAllowBrowser: true,
});

export const askJ6 = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.choices[0]?.message?.content || 'No response from J6.';
  } catch (err) {
    return `Error: ${err.message}`;
  }
};