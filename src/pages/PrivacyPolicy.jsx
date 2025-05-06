import React, { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;

  return (
    <div style={{
      width: '100%',
      maxWidth: isMobile ? '100%' : '700px',
      margin: '0 auto',
      padding: isMobile ? '2rem 1rem' : '3rem 1.5rem',
      backgroundColor: 'white',
      borderRadius: isMobile ? '0.75rem' : '1rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      boxSizing: 'border-box'
    }}>
      <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '2.5rem' }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#ede9fe',
          padding: '1rem',
          borderRadius: '9999px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          marginBottom: '1rem'
        }}>
          <span style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>🔒</span>
        </div>
        <h1 style={{
          fontSize: isMobile ? '1.25rem' : '1.5rem',
          fontWeight: 'bold',
          color: '#6d28d9'
        }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.75rem', color: '#d8b4fe', marginTop: '0.25rem' }}>
          Last Updated: April 7, 2025
        </p>
      </div>

      <p style={{
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#4b5563',
        marginBottom: '2rem',
        borderBottom: '1px solid #ede9fe',
        paddingBottom: '1.5rem'
      }}>
        At <span style={{ color: '#7c3aed', fontWeight: 600 }}>Cherish - Letter To My Child</span>, we care deeply about your privacy.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Section
          icon="📱"
          title="Information We Collect"
          text="Basic account info, your letters, and technical data needed to provide our service."
        />
        <Section
          icon="🔍"
          title="How We Use Your Information"
          text="To deliver your letters, improve our app, and send important updates. We never read your private content."
        />
        <Section
          icon="🤝"
          title="Information Sharing"
          text="We don't sell your data. We only share what's necessary with service providers."
        />
        <Section
          icon="🔐"
          title="Data Security"
          text="Your letters are encrypted and stored securely using industry best practices."
        />
      </div>
    </div>
  );
};

const Section = ({ icon, title, text }) => (
  <section>
    <h2 style={{
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#7c3aed',
      marginBottom: '0.75rem'
    }}>
      <span style={{ marginRight: '0.5rem', opacity: 0.75 }}>{icon}</span> {title}
    </h2>
    <p style={{ color: '#6b7280', fontSize: '0.75rem', paddingLeft: '1.5rem', lineHeight: '1.5rem' }}>
      {text}
    </p>
  </section>
);

export default PrivacyPolicy;
