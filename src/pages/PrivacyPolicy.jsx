import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <div className="inline-block bg-purple-50 p-3 rounded-full shadow-sm mb-5">
          <span className="text-3xl">🔒</span>
        </div>
        <h1 className="text-xl font-bold text-purple-700">Privacy Policy</h1>
        <p className="text-xs text-purple-300 mt-1">Last Updated: April 7, 2025</p>
      </div>

      <p className="mb-10 text-center text-gray-600 text-sm border-b border-purple-100 pb-6">
        At <span className="text-purple-600 font-medium">Letter to My Child</span>, we care deeply about your privacy.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="flex items-center text-sm font-medium text-purple-600 mb-3">
            <span className="mr-2 opacity-75">📱</span> Information We Collect
          </h2>
          <p className="text-gray-500 text-xs pl-6">
            Basic account info, your letters, and technical data needed to provide our service.
          </p>
        </section>

        <section>
          <h2 className="flex items-center text-sm font-medium text-purple-600 mb-3">
            <span className="mr-2 opacity-75">🔍</span> How We Use Your Information
          </h2>
          <p className="text-gray-500 text-xs pl-6">
            To deliver your letters, improve our app, and send important updates. We never read your private content.
          </p>
        </section>

        <section>
          <h2 className="flex items-center text-sm font-medium text-purple-600 mb-3">
            <span className="mr-2 opacity-75">🤝</span> Information Sharing
          </h2>
          <p className="text-gray-500 text-xs pl-6">
            We don't sell your data. We only share what's necessary with service providers.
          </p>
        </section>

        <section>
          <h2 className="flex items-center text-sm font-medium text-purple-600 mb-3">
            <span className="mr-2 opacity-75">🔐</span> Data Security
          </h2>
          <p className="text-gray-500 text-xs pl-6">
            Your letters are encrypted and stored securely using industry-standard protection.
          </p>
        </section>

        <section>
          <h2 className="flex items-center text-sm font-medium text-purple-600 mb-3">
            <span className="mr-2 opacity-75">👪</span> Children's Privacy
          </h2>
          <p className="text-gray-500 text-xs pl-6">
            Our service is for parents. We don't knowingly collect information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="flex items-center text-sm font-medium text-purple-600 mb-3">
            <span className="mr-2 opacity-75">⚙️</span> Your Rights & Choices
          </h2>
          <p className="text-gray-500 text-xs pl-6">
            Access, edit, or delete your account and content anytime. Opt out of non-essential communications.
          </p>
        </section>

        <section>
          <h2 className="flex items-center text-sm font-medium text-purple-600 mb-3">
            <span className="mr-2 opacity-75">🔄</span> Policy Updates
          </h2>
          <p className="text-gray-500 text-xs pl-6">
            We'll notify you about significant changes and update the "Last Updated" date.
          </p>
        </section>
      </div>

      <div className="mt-16 pt-6 border-t border-purple-100 text-center">
        <p className="text-xs text-purple-300 mb-2">Questions about your privacy?</p>
        <a href="mailto:privacy@letterchild.com" className="text-xs font-medium text-purple-500 hover:text-purple-600 transition-colors">
          privacy@letterchild.com
        </a>
        <div className="mt-6 text-purple-200 text-xs">
          <span className="opacity-75">•</span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;