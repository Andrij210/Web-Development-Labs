import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/items';

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = products.find(p => p.id === Number(id));

  if (!item) return <h2>Товар не знайдено</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)}>← Назад</button>
      <div style={{ marginTop: '20px' }}>
        <img src={item.image} alt={item.name} style={{ width: '300px' }} />
        <h1>{item.name}</h1>
        <p><strong>Категорія:</strong> {item.category}</p>
        <p>{item.description}</p>
        <h2>{item.price} грн</h2>
      </div>
    </div>
  );
};

export default DetailsPage;