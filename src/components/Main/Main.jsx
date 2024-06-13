import Card from "../Cards/Card"
import mainStyle from './Main.module.css'
import posts from '../../posts.js'


function Main() {
    return (
      <>
        <main className={mainStyle.pageMain}>
          <div className="container">
            <div className={mainStyle.cards}>
              <Card cardProps={posts}/>
            </div>
          </div>
        </main>
      </>
    )
  }
  
  export default Main
  