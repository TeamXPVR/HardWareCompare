import { useState } from 'react';
import { CATEGORIES, MOCK_PRODUCTS, Product } from '../data';
import './CategoryView.css';

interface CategoryViewProps {
  categoryId: string;
  onBack: () => void;
  onCompareToggle: (product: Product) => void;
  compareList: Product[];
  onAddToSetup: (product: Product) => void;
  setupItem: Product | null;
}

export default function CategoryView({ categoryId, onBack, onCompareToggle, compareList, onAddToSetup, setupItem }: CategoryViewProps) {
  const category = CATEGORIES.find(c => c.id === categoryId);
  const products = MOCK_PRODUCTS.filter(p => p.category === categoryId);
  
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

      <div className="products-grid">
        {products.map(product => {
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
                
                <div className="product-actions">
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
