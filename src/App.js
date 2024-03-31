import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://6600662a87c91a11641945a6.mockapi.io/items').then(res => {
      setItems(res.data)
    });
    axios.get('https://6600662a87c91a11641945a6.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6600662a87c91a11641945a6.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
   // axios.delete(`https://6600662a87c91a11641945a6.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>{searchValue ? `Пошук по запиту: ${searchValue}` : 'Всі товари'}</h1>
          <div className="search-block d-flex align-center">
            <img width={18} height={18} src="/img/search.png" alt="Search" />
            <input value={searchValue} onChange={onChangeSearchInput} placeholder="Пошук..." />
            {searchValue && <button className='deleteSearch' onClick={() => setSearchValue('')}>X</button>}
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;