import { Category, Universe } from '../data';
import './Home.css';

interface HomeProps {
  universe: Universe;
  categories: Category[];
  onViewCategory: (categoryId: string) => void;
}

export default function Home({ universe, categories, onViewCategory }: HomeProps) {
  const getHeroTitle = () => {
    switch (universe) {
      case 'mac': return <><span className="text-gradient">Assemblez le Mac</span><br/>de vos <span className="text-gradient-accent">Rêves</span></>;
      case 'retro': return <><span className="text-gradient">Créer l'Espace Rétro</span><br/><span className="text-gradient-accent">Ultime</span></>;
      case 'pc':
      default: return <><span className="text-gradient">Assemblez le PC</span><br/>de vos <span className="text-gradient-accent">Rêves</span></>;
    }
  };

  return (
    <div className="home-container animate-fade-in">
      <header className="home-header">
        <h1 className="hero-title">
          {getHeroTitle()}
        </h1>
        <p className="hero-subtitle">
          Comparez les derniers composants et équipements, vérifiez les compatibilités et composez la configuration absolue au meilleur prix.
        </p>
      </header>

      <div className="categories-grid">
        {categories.map((category) => (
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
