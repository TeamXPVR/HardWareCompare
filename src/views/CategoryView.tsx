import { useState, useMemo } from 'react';
import { Category, Product, Universe } from '../data';
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

  const category = categories.find(c => c.id === categoryId);
  
  const products = useMemo(() => allProducts.filter(p => p.category === categoryId), [allProducts, categoryId]);
  
  const brands = useMemo(() => {
    const list = products.map(p => p.brand).filter(Boolean) as string[];
    return Array.from(new Set(list));
  }, [products]);

  const filteredProducts = products.filter(p => selectedBrand === 'ALL' || p.brand === selectedBrand);

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
