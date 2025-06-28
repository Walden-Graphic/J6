import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: 'sk-proj-xxx', // use your actual key
  dangerouslyAllowBrowser: true,
});

export const askOpenai = async (messages) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
    });
    return response.choices[0]?.message?.content || 'No response from J6.';
  } catch (err) {
    return `Error: ${err.message}`;
  }
};