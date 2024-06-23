"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm';
import BookList from '../components/BookList';
import StudentList from '../components/StudentList';
import TransactionList from '../components/TransactionList';

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [students, setStudents] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchBooks(storedToken);
      fetchStudents(storedToken);
      fetchTransactions(storedToken);
    }
  }, []);

  const login = async (nim, password) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, { nim, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

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

  const fetchStudents = async (token) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/students`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents(response.data);
    } catch (error) {
      console.error('Failed to fetch students:', error);
    }
  };

  const fetchTransactions = async (token) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(response.data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Library Management System</h1>
      {!token ? (
        <LoginForm login={login} />
      ) : (
        <div>
          <BookList books={books} />
          <StudentList students={students} />
          <TransactionList transactions={transactions} />
        </div>
      )}
    </div>
  );
}
