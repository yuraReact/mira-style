import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import axios from 'axios';
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState } from 'react';
import { useEffect } from 'react';
import Home from './pages/Home';

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
    axios.delete(`https://6600662a87c91a11641945a6.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path='/' element={<Home items={items}
          searchValue={searchValue} setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput} onAddToCart={onAddToCart} />}  >
        </Route>
      </Routes>
    </div>
  );
}

export default App;