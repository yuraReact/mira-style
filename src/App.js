import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { title: 'Пуховик Tom Tailor regular', price: 3250, imageUrl: '/jackets/jacket01.png' },
  { title: 'Куртка Puma runner swift ', price: 4200, imageUrl: '/jackets/jacket02.png' },
  { title: 'Куртка Flower ocean deizy', price: 2100, imageUrl: '/jackets/jacket03.png' },
  { title: 'Куртка New Balance outfit', price: 4800, imageUrl: '/jackets/jacket04.png' },


];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Всі товари</h1>
          <div className="search-block d-flex align-center">
            <img width={18} height={18} src="/img/search.png" alt="Search" />
            <input placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
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
