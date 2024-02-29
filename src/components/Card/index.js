import React from "react";
import styles from './Card.module.scss'

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img width={133} height={112} src={props.imageUrl} alt="Jackets" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>{props.price} грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.png" alt="plus" />
        </button>
      </div>
    </div>
  )
}

export default Card;