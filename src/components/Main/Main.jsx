import Card from "../Cards/Card";
import mainStyle from "./Main.module.css";
import posts from "../../posts.js";

const tagsStyle = {
  'html': mainStyle.green,
  'css': mainStyle.pink,
  'js': mainStyle.yellow,
  'php': mainStyle.blue,
}

function Main() {
  // // funzione per ottenere i tag univoci da tutti i post
  // const getUniqueTags = () => {
  //   const allTags = posts.reduce((acc, post) => {
  //     // console.log(...post.tags);
  //     acc.push(...post.tags);
  //     // console.log(acc);
  //     return acc;
  //   }, []);

  //   // uso Set per rimuovere i duplicati e poi lo converto in array
  //   return Array.from(new Set(allTags));
  // };

  // const uniqueTags = getUniqueTags();
  // // console.log(uniqueTags);
  const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];
  console.log(uniqueTags);
  
  return (
    <>
      <main className={mainStyle.pageMain}>
        <div className="container">
          <div className={mainStyle.tagsSection}>
            <h3 className={mainStyle.title}>Si parla di:</h3>
            <ul className={mainStyle.tagList}>
              {uniqueTags.map((tag, i) => (
                <li className={`${mainStyle.tag} ${tagsStyle[tag]}`} key={i}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className={mainStyle.cards}>
            {posts.map((p) => (
              <Card
                key={p.id}
                title={p.title}
                content={p.content}
                image={p.image}
                tags={p.tags}
                published={p.published}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
