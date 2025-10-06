import React from 'react';


const sampleDeliveries = [
{ id: 'D-001', customer: 'Ali Khan', address: 'F-8 Markaz', status: 'On the way' },
{ id: 'D-002', customer: 'Sara Ahmed', address: 'DHA Phase 2', status: 'Pending' },
{ id: 'D-003', customer: 'Bilal', address: 'Gulberg', status: 'Delivered' },
];


export default function DeliveryManagement() {
return (
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold">Delivery Management</h2>
<div className="text-sm text-gray-500">3 active deliveries</div>
</div>


<div className="grid gap-4">
{sampleDeliveries.map((d) => (
<div key={d.id} className="p-4 bg-white rounded shadow-sm flex justify-between items-center">
<div>
<div className="font-medium">{d.customer} <span className="text-xs text-gray-400">• {d.id}</span></div>
<div className="text-xs text-gray-500">{d.address}</div>
</div>


<div className="text-right">
<div className={`text-sm ${d.status === 'Delivered' ? 'text-green-600' : 'text-orange-500'}`}>{d.status}</div>
<button className="mt-2 text-xs px-2 py-1 border rounded">Details</button>
</div>
</div>
))}
</div>
</section>
);
}