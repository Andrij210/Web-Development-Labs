import React, { useState, useEffect } from 'react';
import { products } from '../data/items';
import ItemCard from '../components/ItemCard';

const CatalogPage = ({ onAddToCart }: { onAddToCart: (p: any) => void }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    // Фільтрація за Варіантом 1
    const result = products.filter(item => {
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'All' || item.category === category;
      return matchSearch && matchCategory;
    });
    setFiltered(result);
  }, [search, category]);

  return (
    <div>
      <div style={{ marginBottom: '25px', display: 'flex', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Пошук за назвою..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '10px', width: '250px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        >
          <option value="All">Всі категорії</option>
          <option value="Смартфони">Смартфони</option>
          <option value="Ноутбуки">Ноутбуки</option>
          <option value="Аксесуари">Аксесуари</option>
        </select>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px' 
      }}>
        {filtered.map(item => (
          <ItemCard key={item.id} item={item} onAdd={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;