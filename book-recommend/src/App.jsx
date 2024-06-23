import React, { useState } from 'react';
import BookForm from './components/BookForm';
import { getSuggestedBook } from './services/ollamaService';
import BookRecommendation from './components/BookRecommendation';

const App = () => {
  const [suggestedBook, setSuggestedBook] = useState('');
  const [loading, setLoading] = useState(false);

  const suggestBook = async (books) => {
    setLoading(true);
    const suggestion = await getSuggestedBook(books);
    setSuggestedBook(suggestion);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg text-center items-center">
        <h1 className="text-2xl font-bold mb-4">Book Suggestion App</h1>
        <div className="mb-6">
          <BookForm onSuggest={suggestBook} />
        </div>
        {loading && <p>Loading...</p>}
        {suggestedBook && <BookRecommendation suggestion={suggestedBook} />}
      </div>
    </div>
  );
};

export default App;
