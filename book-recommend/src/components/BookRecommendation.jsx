import React from 'react';

const BookRecommendation = ({ suggestion }) => {
  // Split the suggestion into book and reasoning sections
  const separatorIndex = suggestion.indexOf('", "');
  const book = suggestion.substring(2, separatorIndex);
  let reasoning = suggestion.substring(separatorIndex + 4); // +4 to skip '", "'
  reasoning = reasoning.substring(0, reasoning.length - 2); // -2 to remove '"]'

  return (
    <div className="flex justify-center  min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Book:</h2>
            <p className="text-lg">{book}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Reasoning:</h2>
            <p className="text-lg">{reasoning}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRecommendation;
