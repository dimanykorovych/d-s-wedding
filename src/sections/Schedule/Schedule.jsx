import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import "./Schedule.scss";

const Schedule = () => {
  return (
    <section id="schedule" className="schedule section section-alt">
      <div className="schedule__container container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Початок святкування
        </motion.h2>
        <div className="section__divider" />
        <p className="section__subtitle">Кожна мить — варта вашої присутності</p>

        <motion.div
          className="schedule__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="schedule__icon">
            <Clock size={28} strokeWidth={1.2} />
          </div>
          <div className="schedule__time">
            <span>16</span>
            <em>:</em>
            <span>00</span>
          </div>
          {/* <p className="schedule__label">Початок святкування</p> */}
          <div className="schedule__rule" />
          <p className="schedule__desc">Зустріч гостей і початок урочистостей</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
