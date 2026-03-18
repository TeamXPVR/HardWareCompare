import './Navbar.css';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  setupCount: number;
}

export default function Navbar({ currentView, setCurrentView, setupCount }: NavbarProps) {
  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => setCurrentView('home')}>
          <div className="logo-icon">HW</div>
          <span className="logo-text text-gradient">HardWare</span>
          <span className="logo-text-accent text-gradient-accent">Compare</span>
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
