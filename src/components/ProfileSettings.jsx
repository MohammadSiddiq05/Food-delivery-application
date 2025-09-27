import React, { useState } from 'react';


export default function ProfileSettings() {
const [name, setName] = useState('Asad Awan');
const [phone, setPhone] = useState('+92 300 0000000');
const [email, setemail] = useState('itxasad98@gmail.com');
const [nic, setnic] = useState('42301-0000000-0');
const [license, setlicense] = useState('lhr-0003');

const save = (e) => {
e.preventDefault();
// placeholder: save to API
alert('Profile saved (demo)');
};


return (
<section>
<h2 className="text-xl font-semibold mb-4">Profile Settings</h2>


<form onSubmit={save} className="bg-white p-4 rounded shadow-sm max-w-lg">
<label className="block text-sm font-medium">Full name</label>
<input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded my-2" />

<label className="block text-sm font-medium">Phone</label>
<input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded my-2" />

<label className="block text-sm font-medium">E-Mail</label>
<input value={email} onChange={(e) => setemail(e.target.value)} className="w-full p-2 border rounded my-2" />

<label className="block text-sm font-medium">CNIC</label>
<input value={nic} onChange={(e) => setnic(e.target.value)} className="w-full p-2 border rounded my-2" />

<label className="block text-sm font-medium">LICENSE</label>
<input value={license} onChange={(e) => setlicense(e.target.value)} className="w-full p-2 border rounded my-2" />


<div className="mt-3">
<button className="px-4 py-2 rounded bg-green-600 text-white">Save</button>
</div>
</form>
</section>
);
}