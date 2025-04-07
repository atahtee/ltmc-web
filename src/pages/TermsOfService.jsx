import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-purple-50 rounded-xl shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-block bg-white p-4 rounded-full shadow-sm mb-4">
          <span className="text-4xl">📝</span>
        </div>
        <h1 className="text-2xl font-bold text-purple-700">Terms of Service</h1>
        <p className="text-sm text-purple-400 mt-1">Effective Date: April 7, 2025</p>
      </div>

      <p className="mb-8 text-center text-gray-600 bg-white p-4 rounded-lg shadow-sm">
        Welcome to <strong className="text-purple-600">Letter to My Child</strong>.
        These are our friendly terms that keep everyone safe and happy! 💌
      </p>

      <div className="space-y-6">
        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">🎮</span> Using the App
          </h2>
          <p className="text-gray-600 text-sm">
            Write heartfelt letters to your children and schedule them for future delivery.
            For personal use only—no commercial or shady stuff, please!
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">🔑</span> Your Account
          </h2>
          <p className="text-gray-600 text-sm">
            Keep your login details private. No sharing accounts or pretending to be someone else.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">✏️</span> Your Letters, Your Words
          </h2>
          <p className="text-gray-600 text-sm">
            Everything you write is 100% yours. We only store it securely and deliver when scheduled.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">🚫</span> What's Not Allowed
          </h2>
          <p className="text-gray-600 text-sm mb-2">Please don't use our app to:</p>
          <div className="pl-5 text-sm text-gray-600 space-y-1">
            <p>• Post harmful or offensive content</p>
            <p>• Violate anyone's privacy</p>
            <p>• Mess with our systems</p>
          </div>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">⚠️</span> If Rules Are Broken
          </h2>
          <p className="text-gray-600 text-sm">
            We may suspend accounts that violate these terms to keep our community happy.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">🔄</span> Changes to Terms
          </h2>
          <p className="text-gray-600 text-sm">
            We'll notify you if we update these terms. Continued use means you accept the changes.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">💌</span> Contact Us
          </h2>
          <p className="text-center text-gray-600 text-sm">
            Questions? Reach out anytime:<br />
            <span className="font-medium text-purple-500 mt-1 block">hello@letterchild.com</span>
          </p>
        </section>
      </div>

      <div className="mt-10 text-center text-sm text-purple-400">
        Made with 💜 by Letter to My Child
      </div>
    </div>
  );
};

export default TermsOfService;