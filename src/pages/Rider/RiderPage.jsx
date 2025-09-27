import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import DeliveryManagement from '../../components/DeliveryManagement';
import EarningsPayments from '../../components/EarningsPayments';
import SupportFeedback from '../../components/SupportFeedback';
import ProfileSettings from '../../components/ProfileSettings';

const RiderPage = () => {
  const [activeTab, setActiveTab] = useState('delivery');

  const renderComponent = () => {
    switch (activeTab) {
      case 'delivery':
        return <DeliveryManagement />;
      case 'earnings':
        return <EarningsPayments />;
      case 'feedback':
        return <SupportFeedback />;
      case 'profile':
        return <ProfileSettings />;
      default:
        return <DeliveryManagement />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar setActiveTab={setActiveTab} />

      {/* Right main area */}
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="p-6 overflow-y-auto flex-1 bg-gray-50">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default RiderPage;