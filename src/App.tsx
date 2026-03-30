import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import CategoryView from './views/CategoryView';
import ComparisonView from './views/ComparisonView';
import SetupBuilder from './views/SetupBuilder';
import { getUniverseData, Product, Universe } from './data';
import './index.css';

function App() {
  const [universe, setUniverse] = useState<Universe>('pc');
  const [currentView, setCurrentView] = useState('home');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  
  // Lists are per universe implicitly, but to make it rock solid, we could reset when switching.
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  
  // Setups per universe to preserve progress!
  const [setups, setSetups] = useState<Record<Universe, Record<string, Product | null>>>({
    pc: {},
    mac: {},
    retro: {}
  });

  const { categories, products } = getUniverseData(universe);

  const currentSetup = setups[universe];

  const handleUniverseSwitch = (newUniverse: Universe) => {
    setUniverse(newUniverse);
    setCurrentView('home');
    setActiveCategoryId(null);
    setCompareList([]);
    setShowComparison(false);
  };

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
    if (compareList.length === 0) {
      setShowComparison(true);
    }
  };

  const handleRemoveCompare = (productId: string) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
    if (compareList.length === 1) setShowComparison(false);
  };

  const handleAddToSetup = (product: Product) => {
    setSetups(prev => {
      const uSetup = { ...(prev[universe] || {}) };
      // Toggle logic
      if (uSetup[product.category]?.id === product.id) {
        delete uSetup[product.category]; // or set to null
      } else {
        uSetup[product.category] = product;
      }
      return { ...prev, [universe]: uSetup };
    });
  };

  const handleRemoveFromSetup = (categoryId: string) => {
    setSetups(prev => {
      const uSetup = { ...(prev[universe] || {}) };
      delete uSetup[categoryId];
      return { ...prev, [universe]: uSetup };
    });
  };

  const setupCount = Object.values(currentSetup).filter(Boolean).length;

  return (
    <div className={`app-container universe-${universe}`}>
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        setupCount={setupCount} 
        universe={universe}
        setUniverse={handleUniverseSwitch}
      />
      
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
        {currentView === 'home' && (
          <Home 
            universe={universe}
            categories={categories}
            onViewCategory={handleViewCategory} 
          />
        )}
        
        {currentView === 'category' && activeCategoryId && (
          <CategoryView 
            universe={universe}
            categoryId={activeCategoryId} 
            categories={categories}
            products={products}
            onBack={() => setCurrentView('home')} 
            onCompareToggle={handleCompareToggle}
            compareList={compareList}
            onAddToSetup={handleAddToSetup}
            setupItem={currentSetup[activeCategoryId] || null}
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
            universe={universe}
            categories={categories}
            setup={currentSetup}
            onRemoveFromSetup={handleRemoveFromSetup}
            onGoToCategory={handleViewCategory}
          />
        )}
      </main>
    </div>
  );
}

export default App;
