import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import CategoryView from './views/CategoryView';
import ComparisonView from './views/ComparisonView';
import SetupBuilder from './views/SetupBuilder';
import { CATEGORIES, Product } from './data';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  
  // Initialize setup state with null for each category
  const [setup, setSetup] = useState<Record<string, Product | null>>(() => {
    const initialRaw: Record<string, Product | null> = {};
    CATEGORIES.forEach(cat => {
      initialRaw[cat.id] = null;
    });
    return initialRaw;
  });

  const handleViewCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setCurrentView('category');
  };

  const handleCompareToggle = (product: Product) => {
    setCompareList(prev => {
      const isComparing = prev.some(p => p.id === product.id);
      if (isComparing) {
        return prev.filter(p => p.id !== product.id);
      } else if (prev.length < 3) {
        return [...prev, product];
      }
      return prev;
    });
    // Optional: Auto show comparison when adding the first item
    if (compareList.length === 0) {
      setShowComparison(true);
    }
  };

  const handleRemoveCompare = (productId: string) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
    if (compareList.length === 1) setShowComparison(false); // Close if empty
  };

  const handleAddToSetup = (product: Product) => {
    setSetup(prev => ({
      ...prev,
      [product.category]: prev[product.category]?.id === product.id ? null : product
    }));
  };

  const handleRemoveFromSetup = (categoryId: string) => {
    setSetup(prev => ({
      ...prev,
      [categoryId]: null
    }));
  };

  const setupCount = Object.values(setup).filter(Boolean).length;

  return (
    <div className="app-container">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} setupCount={setupCount} />
      
      {/* Floating Compare Button if items exist and viewer isn't open */}
      {compareList.length > 0 && !showComparison && (
        <button 
          className="floating-compare-btn btn-primary animate-fade-in"
          onClick={() => setShowComparison(true)}
          style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100 }}
        >
          Voir Comparatif ({compareList.length}/3)
        </button>
      )}

      <main className="main-content">
        {currentView === 'home' && <Home onViewCategory={handleViewCategory} />}
        
        {currentView === 'category' && activeCategoryId && (
          <CategoryView 
            categoryId={activeCategoryId} 
            onBack={() => setCurrentView('home')} 
            onCompareToggle={handleCompareToggle}
            compareList={compareList}
            onAddToSetup={handleAddToSetup}
            setupItem={setup[activeCategoryId]}
          />
        )}

        {showComparison && compareList.length > 0 && (
          <ComparisonView 
            compareList={compareList} 
            onRemove={handleRemoveCompare}
            onClear={() => { setCompareList([]); setShowComparison(false); }}
            onClose={() => setShowComparison(false)}
          />
        )}
        
        {currentView === 'setup' && (
          <SetupBuilder 
            setup={setup}
            onRemoveFromSetup={handleRemoveFromSetup}
            onGoToCategory={handleViewCategory}
          />
        )}
      </main>
    </div>
  );
}

export default App;
