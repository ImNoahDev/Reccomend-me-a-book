import React, { useState } from 'react';
import BookForm from './components/BookForm';
import { getSuggestedBook } from './services/ollamaService';

const App = () => {
  const [suggestedBook, setSuggestedBook] = useState('');
  const [loading, setLoading] = useState(false);

  const suggestBook = async (book1, book2, book3) => {
    setLoading(true);
    const suggestion = await getSuggestedBook(book1, book2, book3);
    setSuggestedBook(suggestion);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Book Suggestion App</h1>
        <BookForm onSuggest={suggestBook} />
        {loading && <p>Loading...</p>}
        {suggestedBook && (
          <div className="mt-4 p-4 bg-indigo-100 rounded-md">
            <h2 className="text-lg font-semibold">Suggested Book:</h2>
            <p>{suggestedBook}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
