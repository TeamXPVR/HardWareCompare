import { Universe } from '../data';
import './Navbar.css';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  setupCount: number;
  universe: Universe;
  setUniverse: (newUniverse: Universe) => void;
}

export default function Navbar({ currentView, setCurrentView, setupCount, universe, setUniverse }: NavbarProps) {
  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => setCurrentView('home')}>
          <div className="logo-icon">HW</div>
          <span className="logo-text text-gradient">HardWare</span>
          <span className="logo-text-accent text-gradient-accent">Compare</span>
        </div>
        
        <div className="universe-switcher" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'var(--glass-bg)', padding: '0.25rem', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <button 
            style={{ padding: '0.4rem 1rem', borderRadius: '15px', border: 'none', background: universe === 'pc' ? 'var(--accent-primary)' : 'transparent', color: universe === 'pc' ? 'white' : 'var(--text-secondary)', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.2s' }}
            onClick={() => setUniverse('pc')}
          >
            PC
          </button>
          <button 
            style={{ padding: '0.4rem 1rem', borderRadius: '15px', border: 'none', background: universe === 'mac' ? 'var(--accent-primary)' : 'transparent', color: universe === 'mac' ? 'white' : 'var(--text-secondary)', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.2s' }}
            onClick={() => setUniverse('mac')}
          >
            Mac
          </button>
          <button 
            style={{ padding: '0.4rem 1rem', borderRadius: '15px', border: 'none', background: universe === 'retro' ? 'var(--accent-primary)' : 'transparent', color: universe === 'retro' ? 'white' : 'var(--text-secondary)', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.2s' }}
            onClick={() => setUniverse('retro')}
          >
            Rétro
          </button>
        </div>

        <nav className="navbar-links">
          <button 
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentView('home')}
          >
            Catalogue
          </button>
          <button 
            className={`nav-link ${currentView === 'setup' ? 'active' : ''}`}
            onClick={() => setCurrentView('setup')}
          >
            Mon Setup
            {setupCount > 0 && <span className="badge setup-badge">{setupCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}
