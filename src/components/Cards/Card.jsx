import cardStyle from "./Card.module.css";

function Card({cardProps}) {

  return (
    <>
      {cardProps.map((card) => (
        <div className={cardStyle.card} key={card.id}>
          <div className={cardStyle.cardImage}>
            <img src={card.image} alt="" />
          </div>
          <div className={cardStyle.cardContent}>
            <h2 className="cardTitle">{card.title}</h2>
            <p className="cardText">{card.text}</p>
            <button className={cardStyle.cardBtn}>LEGGI DI PIÙ</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
