import cardStyle from "./Card.module.css";

function Card({ title, content, image, tags, published }) {
  return (
    <>
      <div className={cardStyle.card}>
        <div className={cardStyle.cardImage}>
          <img src={image} alt="" />
        </div>
        <div className={cardStyle.cardContent}>
          <h2 className="cardTitle">{title}</h2>
          <p className="cardText">{content}</p>
          <button className={cardStyle.cardBtn}>LEGGI DI PIÙ</button>
        </div>
      </div>
    </>
  );
}

export default Card;
