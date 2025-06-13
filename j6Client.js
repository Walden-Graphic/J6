import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: 'sk-...REPLACE_WITH_YOURS...', // use environment variable in production
  dangerouslyAllowBrowser: true,
});

export const askJ6 = async (prompt) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  });

  return response.choices[0]?.message?.content || 'No response.';
};