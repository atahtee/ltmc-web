import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-black rounded-xl shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-block bg-gray-900 p-4 rounded-full shadow-sm mb-4">
          <span className="text-4xl">📝</span>
        </div>
        <h1 className="text-2xl font-bold text-blue-400">Terms of Service</h1>
        <p className="text-sm text-blue-400 mt-1">Effective Date: April 7, 2025</p>
      </div>

      <p className="mb-8 text-center text-blue-400 bg-gray-900 p-4 rounded-lg shadow-sm">
        Welcome to <strong className="text-blue-400">Letter to My Child</strong>.
        These are our friendly terms that keep everyone safe and happy!
      </p>

      <div className="space-y-6">
        {[
          {
            icon: '🎮',
            title: 'Using the App',
            text: 'Write heartfelt letters to your children and schedule them for future delivery. For personal use only—no commercial or shady stuff, please!',
          },
          {
            icon: '🔑',
            title: 'Your Account',
            text: 'Keep your login details private. No sharing accounts or pretending to be someone else.',
          },
          {
            icon: '✏️',
            title: 'Your Letters, Your Words',
            text: 'Everything you write is 100% yours. We only store it securely and deliver when scheduled.',
          },
          {
            icon: '🚫',
            title: "What's Not Allowed",
            text: 'Please don’t use our app to:',
            list: [
              'Post harmful or offensive content',
              'Violate anyone’s privacy',
              'Mess with our systems',
            ],
          },
          {
            icon: '⚠️',
            title: 'If Rules Are Broken',
            text: 'We may suspend accounts that violate these terms to keep our community happy.',
          },
          {
            icon: '🔄',
            title: 'Changes to Terms',
            text: 'We’ll notify you if we update these terms. Continued use means you accept the changes.',
          },
        ].map(({ icon, title, text, list }) => (
          <section key={title} className="bg-gray-900 p-5 rounded-lg shadow-sm">
            <h2 className="flex items-center text-lg font-medium text-blue-400 mb-2">
              <span className="mr-2">{icon}</span> {title}
            </h2>
            <p className="text-blue-400 text-sm mb-2">{text}</p>
            {list && (
              <div className="pl-5 text-sm text-blue-400 space-y-1">
                {list.map((item, idx) => (
                  <p key={idx}>• {item}</p>
                ))}
              </div>
            )}
          </section>
        ))}

        <section className="bg-gray-900 p-5 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-medium text-blue-400 mb-2">
            <span className="mr-2">💌</span> Contact Us
          </h2>
          <p className="text-center text-blue-400 text-sm">
            Questions? Reach out anytime:<br />
            <span className="font-medium text-blue-400 mt-1 block">hello@letterchild.site</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
