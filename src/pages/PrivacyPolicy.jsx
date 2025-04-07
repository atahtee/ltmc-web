import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-purple-50 rounded-xl shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-block bg-white p-4 rounded-full shadow-sm mb-4">
          <span className="text-4xl">🔒</span>
        </div>
        <h1 className="text-2xl font-bold text-purple-700">Privacy Policy</h1>
        <p className="text-sm text-purple-400 mt-1">Last Updated: April 7, 2025</p>
      </div>

      <p className="mb-8 text-center text-gray-600 bg-white p-4 rounded-lg shadow-sm">
        At <strong className="text-purple-600">Letter to My Child</strong>, we care deeply about your privacy.
        Here's how we handle your personal information. 💕
      </p>

      <div className="space-y-6">
        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">📱</span> Information We Collect
          </h2>
          <p className="text-gray-600 text-sm">
            We collect basic account info (email, name), content you create (your letters),
            and technical data (device info, usage patterns) to provide our service.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">🔍</span> How We Use Your Information
          </h2>
          <p className="text-gray-600 text-sm">
            We use your information to deliver your letters at the scheduled time,
            improve our app, and communicate important updates. We'll never read your private letters.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">🤝</span> Information Sharing
          </h2>
          <p className="text-gray-600 text-sm">
            We don't sell your data. Ever. We only share information with service providers
            who help us deliver our service, and only what's necessary.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">🔐</span> Data Security
          </h2>
          <p className="text-gray-600 text-sm">
            Your letters are encrypted and stored securely. We use industry-standard
            security measures to protect all your information from unauthorized access.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">👪</span> Children's Privacy
          </h2>
          <p className="text-gray-600 text-sm">
            Our service is for parents and guardians. We don't knowingly collect information
            from children under 13. If we learn we have collected such information,
            we'll delete it promptly.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">⚙️</span> Your Rights & Choices
          </h2>
          <p className="text-gray-600 text-sm">
            You can access, edit, or delete your account and content anytime.
            You can also opt out of non-essential communications and request your data.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">🔄</span> Policy Updates
          </h2>
          <p className="text-gray-600 text-sm">
            We may update this policy occasionally. We'll notify you about significant changes
            and update the "Last Updated" date.
          </p>
        </section>

        <section className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-purple-600 mb-2">
            <span className="mr-2">✉️</span> Contact Us
          </h2>
          <p className="text-center text-gray-600 text-sm">
            Questions about your privacy? We're here to help:<br />
            <span className="font-medium text-purple-500 mt-1 block">privacy@letterchild.com</span>
          </p>
        </section>
      </div>

      <div className="mt-10 text-center text-sm text-purple-400">
        Your privacy matters 💜 Letter to My Child
      </div>
    </div>
  );
};

export default PrivacyPolicy;