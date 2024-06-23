import { Ollama } from 'ollama';

const ollama = new Ollama({ host: 'http://192.168.1.221:11434' });

export const getSuggestedBook = async (books) => {
  const prompt = `Given the books "${books.join('", "')}", suggest a single other book that the reader might enjoy. please only respond with a single list in the form ["book - artist", "reason" ] where you give the of the book and why the reader would like it. do NOT put any other text in your output`;

  try {
    const response = await ollama.chat({
      model: 'llama3',
      messages: [{ role: 'user', content: prompt }],
    });

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
