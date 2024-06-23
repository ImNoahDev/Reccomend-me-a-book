import React, { useState } from 'react';
import BookForm from './components/BookForm';

const App = () => {
  const [suggestedBook, setSuggestedBook] = useState('');

  const suggestBook = (book1, book2, book3) => {
    // This is where you would implement the logic to suggest a fourth book.
    // For simplicity, let's concatenate the book names.
    const newBook = `${book1} & ${book2} & ${book3}`;
    setSuggestedBook(newBook);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Book Suggestion App</h1>
        <BookForm onSuggest={suggestBook} />
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
