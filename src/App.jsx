import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DeleteData from './pages/DeleteData';
import {Analytics} from "@vercel/analytics/react";
import {useState, useEffect} from 'react';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive styles based on screen width
  const isMobile = windowWidth < 640;

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)',
      fontFamily: 'sans-serif'
    }}>
      <BrowserRouter>
        <nav style={{
          width: '100%',
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem'
        }}>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '0.5rem' : '0'
          }}>
            <Link to="/" style={{
              display: 'flex',
              alignItems: 'center',
              color: '#4f46e5',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              <span style={{fontSize: isMobile ? '1.25rem' : '1.5rem', marginRight: '0.5rem'}}>📝</span>
              <span style={{fontSize: isMobile ? '1rem' : '1.125rem'}}>Cherish - Letter To My Child</span>
            </Link>
            <div style={{marginTop: isMobile ? '0.5rem' : '0'}}>
              <Link to="/terms-of-service" style={{marginRight: '1rem', color: '#4b5563', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500}}>Terms</Link>
              <Link to="/privacy-policy" style={{color: '#4b5563', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500}}>Privacy</Link>
            </div>
          </div>
        </nav>

        <main style={{
          width: '100%',
          padding: isMobile ? '1rem 0.75rem' : '2rem 1.5rem',
          boxSizing: 'border-box'
        }}>
          <Routes>
            <Route path="/" element={
              <div style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: isMobile ? '0.75rem' : '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                padding: isMobile ? '1.5rem 1rem' : '2rem',
                boxSizing: 'border-box'
              }}>
                <div style={{textAlign: 'center', marginBottom: isMobile ? '1.5rem' : '2rem'}}>
                  <h1 style={{
                    fontSize: isMobile ? '1.5rem' : '1.875rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Preserve Your Love in Words
                  </h1>
                  <div style={{
                    width: '6rem',
                    height: '0.25rem',
                    backgroundColor: '#6366f1',
                    margin: '0 auto 1.5rem'
                  }}></div>
                  <p style={{
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    color: '#4b5563',
                    lineHeight: '1.75rem',
                    margin: '0 auto'
                  }}>
                    Cherishhhh is a deeply personal app designed for parents and guardians to write heartfelt letters to their children, letters that can be stored and delivered at a later time.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#eff6ff',
                  borderRadius: '0.75rem',
                  padding: isMobile ? '1.25rem' : '1.5rem',
                  marginBottom: isMobile ? '1.5rem' : '2rem',
                  border: '1px solid #dbeafe',
                  color: '#374151'
                }}>
                  <p style={{marginBottom: '1rem'}}>
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
                  marginTop: isMobile ? '1.5rem' : '2rem',
                  width: '100%'
                }}>
                  <Link to="/terms-of-service" style={{
                    ...buttonStyle('#ffffff', '#6366f1'),
                    width: isMobile ? '100%' : 'auto'
                  }}>View Terms of Service</Link>
                  <Link to="/privacy-policy" style={{
                    ...buttonStyle('#ffffff', '#6366f1'),
                    width: isMobile ? '100%' : 'auto'
                  }}>View Privacy Policy</Link>
                  {/* <Link to="/delete-page" style={{
                    ...buttonStyle('#fef2f2', '#dc2626', '#fecaca'),
                    width: isMobile ? '100%' : 'auto'
                  }}>Delete Data</Link> */}
                </div>
              </div>
            } />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path='/delete-page' element={<DeleteData />} />
          </Routes>
        </main>

        <footer style={{
          width: '100%',
          backgroundColor: 'white',
          padding: isMobile ? '1.25rem 0.75rem' : '1.5rem 1rem',
          borderTop: '1px solid #e5e7eb',
          marginTop: isMobile ? '2rem' : '3rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>
          <p>© {new Date().getFullYear()} Cherish. All rights reserved.</p>
          <p style={{marginTop: '0.5rem'}}>Created with love for future generations.</p>
        </footer>
      </BrowserRouter>
      <Analytics />
    </div>
  );

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
      transition: 'all 0.2s ease-in-out',
      display: 'block'
    };
  }
}

export default App;