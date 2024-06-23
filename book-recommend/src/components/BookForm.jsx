import React, { useState } from 'react';

const BookForm = ({ onSuggest }) => {
  const [book1, setBook1] = useState('');
  const [book2, setBook2] = useState('');
  const [book3, setBook3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuggest(book1, book2, book3);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Book 1</label>
        <input
          type="text"
          value={book1}
          onChange={(e) => setBook1(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Book 2</label>
        <input
          type="text"
          value={book2}
          onChange={(e) => setBook2(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Book 3</label>
        <input
          type="text"
          value={book3}
          onChange={(e) => setBook3(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
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
