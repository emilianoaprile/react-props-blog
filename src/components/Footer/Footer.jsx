import footerStyle from './Footer.module.css'

function Footer() {
  return (
    <>
      <footer className={footerStyle.pageFooter}>
        <div className="container">
          <p className={footerStyle.footerText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            pariatur facilis soluta cumque cum ad quod sint saepe ullam. Fugit
            consequatur aut recusandae nulla, quibusdam distinctio quaerat
            labore iusto. Voluptatibus, a eos temporibus culpa voluptatum iure
            libero ex accusamus in!
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
