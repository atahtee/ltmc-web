
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';
import './App.css';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <nav style={{marginBottom: '2rem'}}>
        <Link to="/" className="nav-btn">🏠 Home</Link>
        
        {/* <Link to="/terms-of-service" className="nav-btn">📜 Terms of Service</Link>
        <Link to="/privacy-policy" className="nav-btn">🔒 Privacy</Link> */}

      </nav>

      <Routes>
        <Route path="/" element={
          <div>
            <p>Letter to My Child is a deeply personal app designed for parents and guardians to write heartfelt letters to their children, letters that can be stored and delivered at a later time. Whether it's a message of love, encouragement, life advice, or a story worth remembering, this app gives you a safe and meaningful way to preserve your words for the future.

              Built with intention and simplicity, Letter to My Child is more than just a note-taking app, it’s a time capsule of emotions, memories, and wisdom created to strengthen the bond between generations.</p>
            <Link to="/terms-of-service">
              <button>View Terms of Service</button>
            </Link>

            <Link to="/privacy-policy">
              <button>View Privacy Policy</button>
            </Link>
          </div>
        } />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;