"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionList from '../components/TransactionList';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchTransactions(storedToken);
    }
  }, []);

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
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
}
