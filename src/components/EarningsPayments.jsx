import React from 'react';


export default function EarningsPayments() {
return (
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold">Earnings & Payments</h2>
<div className="text-sm text-gray-500">This month</div>
</div>


<div className="grid grid-cols-3 gap-4">
<div className="p-4 bg-white rounded shadow-sm">
<div className="text-xs text-gray-500">Total Earnings</div>
<div className="text-2xl font-bold mt-2">PKR 42,500</div>
</div>


<div className="p-4 bg-white rounded shadow-sm">
<div className="text-xs text-gray-500">Pending</div>
<div className="text-2xl font-bold mt-2">PKR 2,300</div>
</div>


<div className="p-4 bg-white rounded shadow-sm">
<div className="text-xs text-gray-500">Withdrawable</div>
<div className="text-2xl font-bold mt-2">PKR 40,200</div>
</div>
</div>
</section>
);
}