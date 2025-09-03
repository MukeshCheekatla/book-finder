import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
  if (books.length === 0) {
    return <p className="text-center text-gray-500">No books found.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default BookList;
