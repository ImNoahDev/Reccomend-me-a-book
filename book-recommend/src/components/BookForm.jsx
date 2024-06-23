import React, { useState } from 'react';

const BookForm = ({ onSuggest }) => {
  const [books, setBooks] = useState([{ name: '', artist: '' }]);

  const handleBookChange = (index, key, value) => {
    const newBooks = [...books];
    newBooks[index][key] = value;
    setBooks(newBooks);
  };

  const handleAddBook = () => {
    setBooks([...books, { name: '', artist: '' }]);
  };

  const handleRemoveBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedBooks = books.map((book) => `${book.name} - ${book.artist}`);
    onSuggest(formattedBooks);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {books.map((book, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={book.name}
            onChange={(e) => handleBookChange(index, 'name', e.target.value)}
            className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder={`Book ${index + 1}`}
          />
          <input
            type="text"
            value={book.artist}
            onChange={(e) => handleBookChange(index, 'artist', e.target.value)}
            className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder={`Artist ${index + 1}`}
          />
          {books.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveBook(index)}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              -
            </button>
          )}
        </div>
      ))}
      <div>
        <button
          type="button"
          onClick={handleAddBook}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          + Add Book
        </button>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Suggest a Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;
