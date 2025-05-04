import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DeleteData from './pages/DeleteData';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)',
      fontFamily: 'sans-serif'
    }}>
      <BrowserRouter>
        <nav style={{
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '1rem 1.5rem'
        }}>
          <div style={{
            maxWidth: '64rem',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link to="/" style={{
              display: 'flex',
              alignItems: 'center',
              color: '#4f46e5',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>📝</span>
              <span style={{ fontSize: '1.125rem' }}>Cherish - Letter To My Child</span>
            </Link>
            <div>
              <Link to="/terms-of-service" style={{ marginRight: '1rem', color: '#4b5563', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Terms</Link>
              <Link to="/privacy-policy" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Privacy</Link>
            </div>
          </div>
        </nav>

        <main style={{ maxWidth: '64rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
          <Routes>
            <Route path="/" element={
              <div style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                padding: '2rem'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                    Preserve Your Love in Words
                  </h1>
                  <div style={{
                    width: '6rem',
                    height: '0.25rem',
                    backgroundColor: '#6366f1',
                    margin: '0 auto 1.5rem'
                  }}></div>
                  <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.75rem', maxWidth: '40rem', margin: '0 auto' }}>
                    Cherish is a deeply personal app designed for parents and guardians to write heartfelt letters to their children, letters that can be stored and delivered at a later time.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#eff6ff',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                  border: '1px solid #dbeafe',
                  color: '#374151'
                }}>
                  <p style={{ marginBottom: '1rem' }}>
                    Whether it's a message of love, encouragement, life advice, or a story worth remembering, this app gives you a safe and meaningful way to preserve your words for the future.
                  </p>
                  <p>
                    Built with intention and simplicity, Letter to My Child is more than just a note-taking app, it's a time capsule of emotions, memories, and wisdom created to strengthen the bond between generations.
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  alignItems: 'center',
                  marginTop: '2rem'
                }}>
                  <Link to="/terms-of-service" style={buttonStyle('#ffffff', '#6366f1')}>View Terms of Service</Link>
                  <Link to="/privacy-policy" style={buttonStyle('#ffffff', '#6366f1')}>View Privacy Policy</Link>
                  {/* <Link to="/delete-page" style={buttonStyle('#fef2f2', '#dc2626', '#fecaca')}>Delete Data</Link> */}
                </div>
              </div>
            } />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path='/delete-page' element={<DeleteData />} />
          </Routes>
        </main>

        <footer style={{
          backgroundColor: 'white',
          padding: '1.5rem 1rem',
          borderTop: '1px solid #e5e7eb',
          marginTop: '3rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>
          <p>© {new Date().getFullYear()} Cherish. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>Created with love for future generations.</p>
        </footer>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

// 🔧 Shared button style helper
function buttonStyle(bg, color, hover = '#f0f0ff') {
  return {
    padding: '0.75rem 1.5rem',
    backgroundColor: bg,
    border: `1px solid ${color}`,
    color: color,
    borderRadius: '0.5rem',
    fontWeight: 500,
    textAlign: 'center',
    textDecoration: 'none',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease-in-out'
  };
}

export default App;
