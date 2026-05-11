import React from 'react';

// Компонент приймає item та функцію onAdd
const ItemCard = ({ item, onAdd }: { item: any, onAdd: (p: any) => void }) => {
  return (
    <div style={{ 
      border: '1px solid #eee', 
      padding: '15px', 
      borderRadius: '10px', 
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
      <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{item.name}</h3>
      <p style={{ fontWeight: 'bold', color: '#27ae60' }}>{item.price} грн</p>
      
      <button 
        onClick={() => onAdd(item)}
        style={{ 
          background: '#27ae60', 
          color: 'white', 
          border: 'none', 
          padding: '10px 20px', 
          borderRadius: '5px', 
          cursor: 'pointer',
          marginTop: '10px',
          width: '100%'
        }}
      >
        🛒 В кошик
      </button>
    </div>
  );
};

// Обов'язково default export, щоб CatalogPage його бачив
export default ItemCard;