"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchStudents(storedToken);
    }
  }, []);

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

  const addStudent = async (student) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/students`, student, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents([...students, response.data]);
    } catch (error) {
      console.error('Failed to add student:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Students Management</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}
