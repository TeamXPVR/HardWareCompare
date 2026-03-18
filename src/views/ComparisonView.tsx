import { Product } from '../data';
import './ComparisonView.css';

interface ComparisonViewProps {
  compareList: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
  onClose: () => void;
}

export default function ComparisonView({ compareList, onRemove, onClear, onClose }: ComparisonViewProps) {
  if (compareList.length === 0) return null;

  // Extract all unique spec keys from the compared products
  const allSpecKeys = Array.from(new Set(
    compareList.flatMap(p => Object.keys(p.specs))
  ));

  return (
    <div className="comparison-overlay animate-fade-in">
      <div className="comparison-header">
        <h2>Comparateur ({compareList.length}/3)</h2>
        <div className="comparison-header-actions">
          <button className="btn-secondary btn-sm" onClick={onClear}>Vider</button>
          <button className="btn-close" onClick={onClose}>✕</button>
        </div>
      </div>
      
      <div className="comparison-table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="spec-label-col"></th>
              {compareList.map(product => (
                <th key={`header-${product.id}`} className="product-col">
                  <div className="comp-product-card glass-panel">
                    <button className="btn-remove" onClick={() => onRemove(product.id)}>✕</button>
                    <img src={product.image} alt={product.name} className="comp-product-image" />
                    <h4 className="comp-product-name">{product.name}</h4>
                    <div className="comp-product-price text-gradient-accent">{product.price}€</div>
                  </div>
                </th>
              ))}
              {/* Fill empty slots up to 3 */}
              {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                <th key={`empty-${i}`} className="product-col empty-col glass-panel">
                  <div className="empty-slot">
                    <span>+</span>
                    <p>Ajouter un produit</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allSpecKeys.map(specKey => (
              <tr key={specKey}>
                <td className="spec-label">{specKey}</td>
                {compareList.map(product => (
                  <td key={`${product.id}-${specKey}`} className="spec-value">
                    {product.specs[specKey] || '-'}
                  </td>
                ))}
                {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                  <td key={`empty-cell-${i}`} className="spec-value empty-cell"></td>
                ))}
              </tr>
            ))}
            {/* Purchase Row */}
            <tr className="purchase-row">
              <td className="spec-label"></td>
              {compareList.map(product => (
                <td key={`buy-${product.id}`} className="spec-value">
                  <a href={product.buyLink} target="_blank" rel="noopener noreferrer" className="btn-buy" style={{ display: 'block' }}>Acheter</a>
                </td>
              ))}
              {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                <td key={`empty-buy-${i}`} className="spec-value empty-cell"></td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
