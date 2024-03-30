import React from "react";
import styles from './Card.module.scss'

const Card = ({imageUrl, title, price, onPlus}) => {
 const [isAdded, setIsAdded] = React.useState(false);

 const onClickPlus = () => {
  onPlus({title, imageUrl, price});
  setIsAdded(true);
 }

  return (
    <div className={styles.card}>
      <img width={133} height={112} src={imageUrl} alt="Jackets" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>{price} грн.</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} width={15} height={15} alt="cehck" src={isAdded ? '/img/checked.png': '/img/plus.png' } />
      </div>
    </div>
  )
}

export default Card;