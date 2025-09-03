import React from "react";

function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h2 className="font-semibold text-lg truncate">{book.title}</h2>
        <p className="text-sm text-gray-600">
          {book.author_name?.join(", ") || "Unknown Author"}
        </p>
        <p className="text-xs text-gray-500">
          First published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
