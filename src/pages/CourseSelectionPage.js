// src/pages/CourseSelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function CourseSelectionPage() {
  const navigate = useNavigate();
  const facultyName = localStorage.getItem('facultyName');

  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen">
      <Header facultyName={facultyName} />
      {/* Course Selection */}
      <section className="flex justify-center items-center h-screen">
        <div className="text-center bg-white p-10 rounded shadow-lg">
          <h1 className="text-3xl font-semibold mb-8">Select Course</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button
              onClick={() => navigate('/preference-viewing')}
              className="bg-blue-900 hover:bg-blue-800 text-white py-4 px-6 rounded text-xl shadow-lg"
            >
              BTech
            </button>
            <button
              onClick={() => navigate('/project-selection')}
              className="bg-green-900 hover:bg-green-800 text-white py-4 px-6 rounded text-xl shadow-lg"
            >
              MTech
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseSelectionPage;
