import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

function Home() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      if (data.docs.length === 0) {
        setError("No results found.");
        setBooks([]);
      } else {
        setBooks(data.docs.slice(0, 20));
      }
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book Finder</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center text-blue-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <BookList books={books} />
    </div>
  );
}

export default Home;
