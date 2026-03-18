import { CATEGORIES } from '../data';
import './Home.css';

interface HomeProps {
  onViewCategory: (categoryId: string) => void;
}

export default function Home({ onViewCategory }: HomeProps) {
  return (
    <div className="home-container animate-fade-in">
      <header className="home-header">
        <h1 className="hero-title">
          Assemblez le PC de vos <span className="text-gradient-accent">Rêves</span>
        </h1>
        <p className="hero-subtitle">
          Comparez les derniers composants de 2026, vérifiez les compatibilités et composez la configuration absolue au meilleur prix.
        </p>
      </header>

      <div className="categories-grid">
        {CATEGORIES.map((category) => (
          <div 
            key={category.id} 
            className="category-card glass-panel"
            onClick={() => onViewCategory(category.id)}
          >
            <div className="category-bg-image" style={{ backgroundImage: `url(${category.image})` }}>
              <div className="category-overlay" style={{ background: `linear-gradient(to top, rgba(13,15,20,0.95), rgba(13,15,20,0.2))` }}></div>
            </div>
            <div className="category-content">
              <div className="category-icon-wrapper" style={{ borderColor: category.color, color: category.color }}>
                {/* SVG icon could go here based on ID */}
                <span>{category.name.charAt(0)}</span>
              </div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">{category.description}</p>
              
              <div className="category-action">
                Voir le catalogue <span className="arrow">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
