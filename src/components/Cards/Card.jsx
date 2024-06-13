import s from "./Card.module.css";

const tagsStyle = {
  'html': s.green,
  'css': s.pink,
  'js': s.yellow,
  'php': s.blue,
}
function Card({ title, content, image, tags, published }) {

  return (
    <>
    {/* mostro solo i post che hanno published == true */}
      {published && (
        <div className={s.card}>
          <div className={s.cardImage}>
            <img src={image === '' ? "https://picsum.photos/200" : ''} alt="Titolo" />
          </div>
          <div className={s.cardContent}>
            <h2 className="cardTitle">{title}</h2>
            <p className="cardText">{content}</p>
            <ul className={s.cardTags}>
              {tags.map((tag, i) => (
                <li 
                  className = {`${s.tag} ${tagsStyle[tag]}`} 
                  key={i}>
                    {`#${tag}`}
                </li>
              ))}
            </ul>
            <button className={s.cardBtn}>LEGGI DI PIÙ</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
