import { useMemo } from 'react';
import { Category, Product, Universe } from '../data';
import './SetupBuilder.css';

interface SetupBuilderProps {
  universe: Universe;
  categories: Category[];
  setup: Record<string, Product | null>;
  onRemoveFromSetup: (categoryId: string) => void;
  onGoToCategory: (categoryId: string) => void;
}

export default function SetupBuilder({ universe, categories, setup, onRemoveFromSetup, onGoToCategory }: SetupBuilderProps) {
  const totalPrice = useMemo(() => {
    return Object.values(setup).reduce((total, product) => {
      return total + (product?.price || 0);
    }, 0);
  }, [setup]);

  const hasOutofStock = useMemo(() => {
    return Object.values(setup).some(product => product?.stock === 'out_of_stock');
  }, [setup]);

  const completedSlots = Object.values(setup).filter(Boolean).length;
  const totalSlots = categories.length;

  return (
    <div className="setup-builder animate-fade-in">
      <div className="setup-header glass-panel">
        <div>
          <h1>Mon Setup Personnalisé</h1>
          <p className="text-secondary">Composez votre configuration idéale composant par composant.</p>
        </div>
        
        <div className="setup-summary">
          <div className="setup-progress">
            <div className="progress-text">Progression: {completedSlots}/{totalSlots}</div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${(completedSlots / totalSlots) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="price-total glass-panel">
            <span className="price-label">Prix Total</span>
            <span className="price-amount text-gradient-accent">{totalPrice}€</span>
          </div>
          
          <button className="btn-primary" disabled={completedSlots === 0 || hasOutofStock}>
            Passer commande
          </button>
        </div>
      </div>

      {hasOutofStock && (
        <div className="alert-box alert-warning animate-fade-in">
          ⚠️ Attention : Un ou plusieurs composants de votre setup sont actuellement en rupture de stock.
        </div>
      )}

      <div className="setup-slots-grid">
        {categories.map(category => {
          const product = setup[category.id];
          
          return (
            <div key={category.id} className="setup-slot glass-panel">
              <div className="slot-header" style={{ borderBottomColor: category.color }}>
                <span className="slot-icon" style={{ backgroundColor: category.color }}>{category.name.charAt(0)}</span>
                <h3>{category.name}</h3>
              </div>
              
              <div className="slot-content">
                {product ? (
                  <div className="slot-product">
                    <img src={product.image} alt={product.name} className="slot-image" />
                    <div className="slot-details">
                      <h4>{product.name}</h4>
                      <div className="slot-price">{product.price}€</div>
                      <div className={`stock-text stock-${product.stock}`}>
                        {product.stock === 'in_stock' ? '✓ En Stock' : product.stock === 'low_stock' ? '⚠️ Stock Limité' : '❌ Rupture'}
                      </div>
                    </div>
                    <div className="slot-actions">
                      <button className="btn-secondary" onClick={() => onGoToCategory(category.id)}>Changer</button>
                      <button className="btn-danger-outline" onClick={() => onRemoveFromSetup(category.id)}>Retirer</button>
                    </div>
                  </div>
                ) : (
                  <div className="slot-empty">
                    <div className="empty-icon">+</div>
                    <p>Aucun composant sélectionné</p>
                    <button 
                      className="btn-primary" 
                      onClick={() => onGoToCategory(category.id)}
                      style={{ background: category.color, boxShadow: `0 4px 15px ${category.color}40` }}
                    >
                      Choisir
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
