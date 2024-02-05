import React from "react";

const Card = () => {
    return(
        <div className="card">
  <img width={133} height={112} src="/jackets/jacket01.png" alt="Jackets" />
  <h5>Пуховик Tom Tailor regular</h5>
  <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column">
      <span>Ціна:</span>
      <b>3250 грн.</b>
    </div>
    <button className="button">
      <img width={11} height={11} src="/img/plus.png" alt="plus" />
    </button>
  </div>
</div>
    )
}

export default Card;