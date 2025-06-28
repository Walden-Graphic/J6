import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
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