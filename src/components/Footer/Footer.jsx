import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer__inner">
        <h2 className="footer__names">
          Дмитро <span className="amp footer__amp">&amp;</span> Світлана
        </h2>
        <p className="footer__date">19 · 09 · 2026</p>
        <p className="footer__thanks">
          Дякуємо, що розділите цей особливий день разом з нами
        </p>
        <p className="footer__sign">З любов'ю</p>
      </div>
    </section>
  );
};

export default Footer;
