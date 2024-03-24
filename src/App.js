import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState } from 'react';


function App() {
  const[items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  fetch('https://6600662a87c91a11641945a6.mockapi.io/items').then(res => {
     return res.json();
  }).then(json => {
    setItems(json);
  })
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={()=> setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Всі товари</h1>
          <div className="search-block d-flex align-center">
            <img width={18} height={18} src="/img/search.png" alt="Search" />
            <input placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus = {()=> console.log('Нажали плюс')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
