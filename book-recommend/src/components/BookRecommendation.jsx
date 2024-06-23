import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookRecommendation = ({ suggestion }) => {
  const [bookInfo, setBookInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Extract book title from suggestion
        const separatorIndex = suggestion.indexOf('", "');
        const bookTitle = suggestion.substring(2, separatorIndex);

        // Fetch book info from Google Books API
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookTitle)}`
        );

        // Extract relevant book info and set state
        const book = response.data.items[0];
        if (book) {
          setBookInfo({
            title: book.volumeInfo.title,
            reasoning: suggestion.substring(separatorIndex + 4, suggestion.length - 2),
            coverImage: book.volumeInfo.imageLinks?.thumbnail,
          });
        }
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, [suggestion]);

  if (!bookInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Book:</h2>
            <p className="text-lg">{bookInfo.title}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Reasoning:</h2>
            <p className="text-lg">{bookInfo.reasoning}</p>
          </div>
          {bookInfo.coverImage && (
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-semibold mb-2">Book Cover:</h2>
              <img src={bookInfo.coverImage} alt="Book Cover" className="mx-auto rounded-lg shadow-lg max-w-xs" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookRecommendation;
