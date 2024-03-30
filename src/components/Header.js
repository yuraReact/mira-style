const Header = (props) => {
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={65} height={55} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">Mira одяг</h3>
            <p className="opacity-5">Магазин найкращого одягу</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} alt="cart" src="/img/cart.png" />
            <span>4750 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.png" alt="user"/>
          </li>
        </ul>
      </header>
    )
}

export default Header;