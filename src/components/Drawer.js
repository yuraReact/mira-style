const Drawer = ({ onClose, items = [] }) => {
  return (
    <div className="overlay">

      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">Кошик  <button onClick={onClose} className="removeBtn cu-p">X</button></h2>

        <div className="items mt-20">
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
              <button className="removeBtn">X</button>
            </div>
            ))}
        </div>

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