import headerStyle from './Header.module.css';


function Header() {

    return (
      <>
        <header className={headerStyle.pageHeader}>
            <h1 className={headerStyle.headerTitle}>Il mio blog</h1>
        </header>
      </>
    )
  }
  
  export default Header
  