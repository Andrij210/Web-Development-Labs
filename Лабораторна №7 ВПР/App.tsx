import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';

function App() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ 
        background: '#2c3e50', 
        color: 'white', 
        padding: '15px 5%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '22px', fontWeight: 'bold' }}>
          ⚡ ElectroShop
        </Link>
        <div style={{ fontSize: '16px' }}>
          🛒 Кошик: <strong>{cart.length}</strong> | Сума: {cart.reduce((sum, item) => sum + item.price, 0)} грн
        </div>
      </header>

      <main style={{ padding: '20px 5%' }}>
        <Routes>
          <Route path="/" element={<CatalogPage onAddToCart={addToCart} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;