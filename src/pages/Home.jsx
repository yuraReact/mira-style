import Card from "../components/Card"

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart }) {
    return (
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
    )
}

export default Home;