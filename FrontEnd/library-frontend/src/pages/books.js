"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchBooks(storedToken);
    }
  }, []);

  const fetchBooks = async (token) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <BookList books={books} />
    </div>
  );
}
