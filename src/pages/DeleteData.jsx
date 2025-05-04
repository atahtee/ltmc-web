import React, { useState } from 'react';

const DeleteData = () => {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://yourapi.com/delete-account-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, reason }),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">🎉 Request Submitted</h2>
          <p className="text-gray-700">
            We’ve received your request. Your account and data will be deleted within 30 days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-4 text-center">
          Delete My Account
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          This will permanently delete your account and associated data.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
    <input
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="you@example.com"
      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition placeholder:text-gray-400 text-sm shadow-sm"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Reason (Optional)</label>
    <textarea
      value={reason}
      onChange={(e) => setReason(e.target.value)}
      placeholder="Tell us why you're leaving..."
      rows={4}
      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition placeholder:text-gray-400 text-sm shadow-sm"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
  >
    🚨 Request Deletion
  </button>
</form>


        <p className="text-xs text-gray-500 mt-6 text-center">
          Need help? Email us at <a href="mailto:support@futureself.com" className="underline">support@lettertomychild.com</a>
        </p>
      </div>
    </div>
  );
};

export default DeleteData;
