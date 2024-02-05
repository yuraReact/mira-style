const Drawer = () => {
    return(
        <div style={{display : "none"}} className="overlay">
        
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">Кошик  <button className="removeBtn cu-p">X</button></h2>

          <div className="items mt-20">
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-15"
                width={70}
                height={70}
                src="/jackets/jacket01.png"
                alt="Jackets"
              />
              <div className="mr-20">
                <p className="mb-5">Пуховик Tom Tailor regular</p>
                <b>3250 грн.</b>
              </div>
              <button className="removeBtn">X</button>
            </div>

            <div className="cartItem d-flex align-center">
              <img
                className="mr-15"
                width={70}
                height={70}
                src="/jackets/jacket02.png"
                alt="Jackets"
              />
              <div className="mr-20">
                <p className="mb-5">Пуховик Tom Tailor regular</p>
                <b>3250 грн.</b>
              </div>
              <button className="removeBtn">X</button>
            </div>
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