import { Ollama } from 'ollama';

const ollama = new Ollama({ host: 'http://192.168.1.221:11434' });

export const getSuggestedBook = async (book1, book2, book3) => {
  const prompt = `Given the books "${book1}", "${book2}", and "${book3}", suggest a fourth book that the reader might enjoy.`;

  try {
    const response = await ollama.chat({
      model: 'tinyllama',
      messages: [{ role: 'user', content: prompt }],
    });

    console.log('Ollama response:', response);

    if (response && response.message && response.message.content) {
      return response.message.content;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching book suggestion:', error);
    return 'Could not fetch a suggestion. Please try again.';
  }
};
