import { useState, useMemo } from 'react';
import { Category, Product, Universe } from '../data';
import { BRAND_HISTORIES } from '../data/retro';
import './CategoryView.css';

interface CategoryViewProps {
  universe: Universe;
  categoryId: string;
  categories: Category[];
  products: Product[];
  onBack: () => void;
  onCompareToggle: (product: Product) => void;
  compareList: Product[];
  onAddToSetup: (product: Product) => void;
  setupItem: Product | null;
}

export default function CategoryView({ universe, categoryId, categories, products: allProducts, onBack, onCompareToggle, compareList, onAddToSetup, setupItem }: CategoryViewProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | 'ALL'>('ALL');
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const category = categories.find(c => c.id === categoryId);
  
  const products = useMemo(() => allProducts.filter(p => p.category === categoryId), [allProducts, categoryId]);
  
  const brands = useMemo(() => {
    const list = products.map(p => p.brand).filter(Boolean) as string[];
    return Array.from(new Set(list));
  }, [products]);

  const filteredProducts = useMemo(() => {
    const list = products.filter(p => selectedBrand === 'ALL' || p.brand === selectedBrand);
    
    // Tri chronologique de la plus ancienne à la plus récente
    return list.sort((a, b) => {
      const getYear = (p: Product) => p.productionYear || parseInt(p.releaseDate.match(/\d{4}/)?.[0] || '0', 10) || 0;
      return getYear(a) - getYear(b);
    });
  }, [products, selectedBrand]);

  if (!category) return null;

  return (
    <div className="category-view animate-fade-in">
      <div className="view-header">
        <button className="btn-secondary back-btn" onClick={onBack}>
          ← Retour
        </button>
        <div className="category-title-group">
          <div className="header-icon" style={{ borderColor: category.color, color: category.color }}>
            {category.name.charAt(0)}
          </div>
          <h1 style={{ color: category.color }}>{category.name}</h1>
        </div>
      </div>
      
      {brands.length > 0 && (
        <div className="brand-filters" style={{ display: 'flex', gap: '0.8rem', padding: '0 0 1.5rem', overflowX: 'auto' }}>
          <button 
            className="btn-secondary"
            onClick={() => setSelectedBrand('ALL')}
            style={{ borderRadius: '20px', fontSize: '0.85rem', padding: '0.4rem 1rem', ...(selectedBrand === 'ALL' ? { background: category.color, borderColor: category.color, color: 'white' } : {}) }}
          >
            Toutes les marques
          </button>
          {brands.map(brand => (
            <button 
              key={brand}
              className="btn-secondary"
              onClick={() => setSelectedBrand(brand)}
              style={{ borderRadius: '20px', fontSize: '0.85rem', padding: '0.4rem 1rem', ...(selectedBrand === brand ? { background: category.color, borderColor: category.color, color: 'white' } : {}) }}
            >
              {brand}
            </button>
          ))}
          
          {selectedBrand !== 'ALL' && BRAND_HISTORIES[selectedBrand] && (
            <button 
              className="btn-history"
              onClick={() => setIsHistoryModalOpen(true)}
              style={{
                marginLeft: 'auto',
                borderRadius: '20px', 
                fontSize: '0.85rem', 
                padding: '0.4rem 1rem',
                background: 'linear-gradient(45deg, #e6b980, #eacda3)',
                color: '#222',
                border: 'none',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(234, 205, 163, 0.4)',
                cursor: 'pointer'
              }}
            >
              📖 L'Histoire de {selectedBrand}
            </button>
          )}
        </div>
      )}

      {isHistoryModalOpen && selectedBrand !== 'ALL' && BRAND_HISTORIES[selectedBrand] && (
        <div className="history-modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div className="history-modal-content" style={{
            background: 'var(--surface)', padding: '2.5rem', borderRadius: '16px',
            maxWidth: '600px', width: '90%', border: `1px solid ${category.color}`,
            boxShadow: `0 20px 50px rgba(0,0,0,0.5)`, position: 'relative'
          }}>
            <button 
              onClick={() => setIsHistoryModalOpen(false)}
              style={{
                position: 'absolute', top: '1rem', right: '1rem', background: 'transparent',
                border: 'none', color: 'var(--text-secondary)', fontSize: '1.5rem', cursor: 'pointer'
              }}
            >
              ×
            </button>
            <h2 style={{ color: category.color, marginBottom: '1.5rem', fontSize: '2rem' }}>
              {BRAND_HISTORIES[selectedBrand].title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {BRAND_HISTORIES[selectedBrand].content.map((paragraph, idx) => (
                <p key={idx} style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <button 
              className="btn-primary" 
              onClick={() => setIsHistoryModalOpen(false)}
              style={{ marginTop: '2rem', width: '100%' }}
            >
              Fermer l'Histoire
            </button>
          </div>
        </div>
      )}

      <div className="products-grid">
        {filteredProducts.map(product => {
          const isComparing = compareList.some(p => p.id === product.id);
          const canCompare = isComparing || compareList.length < 3;
          
          return (
            <div key={product.id} className="product-card glass-panel">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className={`stock-badge stock-${product.stock}`}>
                  {product.stock === 'in_stock' ? 'En Stock' : product.stock === 'low_stock' ? 'Stock Limité' : 'Rupture'}
                </div>
              </div>
              
              <div className="product-info">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">{product.price}€</div>
                </div>
                
                <div className="product-summary">
                  {product.summary.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="summary-item">• {item}</div>
                  ))}
                </div>
                
                <div className="product-specs" style={{ marginTop: '0.6rem', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontSize: '0.85rem' }}>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2px' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>{key}</span>
                      <span style={{ fontWeight: '500', color: '#fff', textAlign: 'right', marginLeft: '1rem' }}>{value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="product-dates" style={{ marginTop: '0.8rem', padding: '0.8rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Année de production:</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--accent-primary)' }}>
                      {product.productionYear || product.releaseDate.match(/\d{4}/)?.[0] || 'Inconnue'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Mise en vente:</span>
                    <span style={{ color: 'var(--text)' }}>
                      {product.fullReleaseDate || product.releaseDate}
                    </span>
                  </div>
                </div>
                
                <div className="product-actions" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <button 
                    className={`btn-compare ${isComparing ? 'active' : ''}`}
                    onClick={() => onCompareToggle(product)}
                    disabled={!canCompare && !isComparing}
                  >
                    {isComparing ? 'Retirer' : 'Comparer'}
                  </button>
                  <button 
                    className={`btn-secondary ${setupItem?.id === product.id ? 'active' : ''}`}
                    onClick={() => onAddToSetup(product)}
                    style={setupItem?.id === product.id ? { background: 'var(--accent-primary)', borderColor: 'var(--accent-primary)', color: 'white' } : {}}
                  >
                    {setupItem?.id === product.id ? '✓ Dans le Setup' : '+ Setup'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
