import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('riderId');
    localStorage.removeItem('token');
    navigate('/RiderSignUp'); // 👈 FIXED route casing
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Rider Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, Rider</span>
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
