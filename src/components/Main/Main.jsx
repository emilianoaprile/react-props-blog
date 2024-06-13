import Card from "../Cards/Card";
import mainStyle from "./Main.module.css";
import posts from "../../posts.js";

function Main() {
  return (
    <>
      <main className={mainStyle.pageMain}>
        <div className="container">
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
