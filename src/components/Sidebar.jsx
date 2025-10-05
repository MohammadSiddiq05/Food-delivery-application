import React from 'react';

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="w-56 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Rider Panel</h2>
      <ul className="space-y-3">
        <li
          onClick={() => setActiveTab('delivery')}
          className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded"
        >
          Delivery Management
        </li>
        <li
          onClick={() => setActiveTab('earnings')}
          className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded"
        >
          Earnings & Payments
        </li>
        <li
          onClick={() => setActiveTab('feedback')}
          className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded"
        >
          Support & Feedback
        </li>
        <li
          onClick={() => setActiveTab('profile')}
          className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded"
        >
          Profile Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
