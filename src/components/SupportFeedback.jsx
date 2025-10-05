import React, { useState } from 'react';


export default function SupportFeedback() {
const [message, setMessage] = useState('');
const [sent, setSent] = useState(false);


const handleSubmit = (e) => {
e.preventDefault();
// placeholder: call API
setSent(true);
setMessage('');
setTimeout(() => setSent(false), 2500);
};


return (
<section>
<h2 className="text-xl font-semibold mb-4">Support & Feedback</h2>


<form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm max-w-2xl">
<label className="block text-sm font-medium mb-2">Message</label>
<textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full p-2 border rounded" placeholder="Describe the issue or feedback" />


<div className="mt-3 flex items-center gap-3">
<button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Send</button>
{sent && <div className="text-sm text-green-600">Message sent — we will contact you soon.</div>}
</div>
</form>
</section>
);
}