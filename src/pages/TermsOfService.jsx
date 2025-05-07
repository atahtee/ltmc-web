import React from 'react';
import { Link } from 'react-router-dom';
import { useWindowWidth } from '../hooks/useWindowWidth'; // You might want to create this hook

const TermsOfService = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 640;

  return (
    <div style={{
      width: '100%',
      backgroundColor: 'white',
      borderRadius: isMobile ? '0.75rem' : '1rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: isMobile ? '1.5rem 1rem' : '2rem',
      boxSizing: 'border-box',
      margin: '0 auto',
      maxWidth: '800px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eff6ff',
          padding: '1rem',
          borderRadius: '50%',
          marginBottom: '1rem'
        }}>
          <span style={{ fontSize: '2rem' }}>📝</span>
        </div>
        <h1 style={{
          fontSize: isMobile ? '1.5rem' : '1.875rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          Terms of Service
        </h1>
        <p style={{
          fontSize: isMobile ? '0.875rem' : '1rem',
          color: '#6b7280'
        }}>
          Effective Date: April 7, 2025
        </p>
      </div>

      <div style={{
        backgroundColor: '#eff6ff',
        borderRadius: '0.75rem',
        padding: isMobile ? '1.25rem' : '1.5rem',
        marginBottom: isMobile ? '1.5rem' : '2rem',
        border: '1px solid #dbeafe',
        color: '#374151',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>
          Welcome to <strong style={{ color: '#4f46e5' }}>Cherish - Letter To My Child</strong>.
          These are our friendly terms that keep everyone safe and happy!
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
            text: 'Please don\'t use our app to:',
            list: [
              'Post harmful or offensive content',
              'Violate anyone\'s privacy',
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
            text: 'We\'ll notify you if we update these terms. Continued use means you accept the changes.',
          },
        ].map(({ icon, title, text, list }) => (
          <div key={title} style={{
            backgroundColor: '#f9fafb',
            padding: isMobile ? '1rem' : '1.25rem',
            borderRadius: '0.5rem',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: isMobile ? '1.125rem' : '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem'
            }}>
              <span style={{ marginRight: '0.5rem' }}>{icon}</span> {title}
            </h2>
            <p style={{
              fontSize: isMobile ? '0.875rem' : '1rem',
              color: '#4b5563',
              lineHeight: '1.5',
              marginBottom: list ? '0.5rem' : '0'
            }}>
              {text}
            </p>
            {list && (
              <ul style={{
                paddingLeft: '1.5rem',
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#4b5563',
                lineHeight: '1.5'
              }}>
                {list.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.25rem' }}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div style={{
          backgroundColor: '#f9fafb',
          padding: isMobile ? '1rem' : '1.25rem',
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <h2 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: isMobile ? '1.125rem' : '1.25rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            <span style={{ marginRight: '0.5rem' }}>💌</span> Contact Us
          </h2>
          <p style={{
            fontSize: isMobile ? '0.875rem' : '1rem',
            color: '#4b5563',
            lineHeight: '1.5',
            margin: '0'
          }}>
            Questions? Reach out anytime:<br />
            <span style={{ fontWeight: '600', color: '#4f46e5' }}>hello@letterchild.site</span>
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: isMobile ? '1.5rem' : '2rem'
      }}>
        <Link to="/" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#4f46e5',
          color: 'white',
          borderRadius: '0.5rem',
          fontWeight: '500',
          textDecoration: 'none',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          transition: 'all 0.2s ease-in-out',
          textAlign: 'center'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TermsOfService;