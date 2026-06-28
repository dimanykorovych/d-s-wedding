import "./HowToGet.scss";

import { motion } from "framer-motion";
import { TrainFront, ExternalLink } from "lucide-react";

const steps = [
  {
    label: "Крок 1",
    text: "З аеропорту Вроцлава їде автобус 106 до центрального вокзалу DWORZEC GŁÓWNY (DWORCOWA)  (~40 хв)."
  },
  {
    label: "Крок 2",
    text: "З вокзалу прямий потяг до станції Nowa Sól (~1 год 30 хв)."
  }
];

const HowToGet = () => {
  return (
    <section className="how section">
      <div className="how__container container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Як добратися
        </motion.h2>
        <div className="section__divider" />
        <p className="section__subtitle">Інструкція з аеропорту Вроцлава до Nowa Sól</p>

        <div className="how__grid">
          <motion.div
            className="how__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="how__icon">
              <TrainFront size={24} />
            </div>
            <h3 className="how__title">Потягом</h3>

            <div className="how__steps">
              {steps.map((s) => (
                <div className="how__step" key={s.label}>
                  <span className="how__step-label">{s.label}</span>
                  <p className="how__step-text">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="how__apps">
              <p className="how__apps-title">Рекомендовані програми:</p>
              <div className="how__apps-list">
                <a
                  href="https://koleo.pl/"
                  target="_blank"
                  rel="noreferrer"
                  className="how__btn btn btn--primary "
                >
                  KOLEO
                  <ExternalLink />
                </a>

                <a
                  href="https://jakdojade.pl/"
                  target="_blank"
                  rel="noreferrer"
                  className="how__btn btn btn--outline "
                >
                  Jakdojade
                  <ExternalLink />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToGet;
