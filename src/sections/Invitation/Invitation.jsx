import { motion } from "framer-motion";

import "./Invitation.scss";

const Invitation = () => {
  return (
    <section id="invitation" className="invitation section">
      <div className="invitaition__container container">
        <motion.div
          className="invitation__card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="invitation__title">Дорогі гості</h2>

          <div className="invitation__text">
            <p>Є події, які залишаються в пам'яті на все життя</p>
            <p>І є люди, з якими їх хочеться розділити</p>
            <p>З великою радістю запрошуємо вас на наше весілля</p>
          </div>

          <div className="invitation__divider" aria-hidden="true" />

          <div className="invitation__date">
            <div className="invitation__date-side">
              <span className="invitation__date-line" />
              <span className="invitation__date-label">Вересень</span>
            </div>
            <div className="invitation__date-num">19</div>
            <div className="invitation__date-side">
              <span className="invitation__date-line" />
              <span className="invitation__date-label">Субота</span>
            </div>
          </div>
          <div className="invitation__year">2026</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
