import useCountdown from "@/hooks/useCountdown";
import { motion } from "framer-motion";

import "./Countdown.scss";

const format = (value) => String(value).padStart(2, "0");
const targetDate = new Date("2026-09-19T16:00:00");

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const items = [
    { label: "Днів", value: days },
    { label: "Годин", value: hours },
    { label: "Хвилин", value: minutes },
    { label: "Секунд", value: seconds }
  ];

  return (
    <section id="countdown" className="section section--alt countdown">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          До нашого дня залишилось
        </motion.h2>
        <div className="section__divider" />
        <p className="section__subtitle">19 вересня 2026 року</p>

        <div className="countdown__grid">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="countdown__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <motion.div
                key={item.value}
                className="countdown__value"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {format(item.value)}
              </motion.div>

              <div className="countdown__label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
