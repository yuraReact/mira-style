const Drawer = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className="overlay">

      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">Кошик  <button onClick={onClose} className="removeBtn cu-p">X</button></h2>


        {items.length > 0 ? <div className="items mt-20">
            {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <img
                  className="mr-15"
                  width={70}
                  height={70}
                  src={obj.imageUrl}
                  alt="Jackets" />
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} грн.</b>
                </div>
                <button onClick={() => onRemove(obj.id)} className="removeBtn">X</button>
              </div>
            ))}
          </div> : (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb20" height='120' width='120' src="/img/basket.png"></img>
            <h2>Кошик порожній</h2>
            <p className="opacity-6">Додайте хоча б один товар, щоб оформити замовлення</p>
            <button onClick={onClose} className="backButton">Повернутись назад</button>
          </div>)
        }


        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Всього:</span>
              <div></div>
              <b>6500 грн. </b>
            </li>
            <li>
              <span>Податок 5%:</span>
              <div></div>
              <b>325 грн. </b>
            </li>
          </ul>
          <button className="pinkButton">Оформити замовлення  ⇒</button>
        </div>
      </div>
    </div>
  )
}

export default Drawer;