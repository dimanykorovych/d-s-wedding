import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import locationImg from "@assets/images/location.jpg";

import "./Location.scss";

const VENUE_NAME = "Nadodrzański Dwór";
const VENUE_ADDRESS = "aleja Wolności 8, 67-100 Nowa Sól";
const LOCATION = `${VENUE_NAME}, ${VENUE_ADDRESS}`;

const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  LOCATION
)}`;

const EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  LOCATION
)}&output=embed`;
const Location = () => {
  return (
    <section id="location" className="location section section--alt">
      <div className="location__container container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Локація
        </motion.h2>
        <div className="section__divider" />
        <p className="section__subtitle">Місце, де народиться наша історія</p>

        <motion.div
          className="location__grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="location__image">
            <img
              src={locationImg}
              alt={VENUE_NAME}
              loading="lazy"
              width={1600}
              height={1100}
            />
          </div>
          <div className="location__info">
            <span className="location__eyebrow">Місце святкування</span>
            <h3 className="location__name">{VENUE_NAME}</h3>
            <p className="location__address">
              <MapPin /> {VENUE_ADDRESS}
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              <Navigation /> Побудувати маршрут
            </a>
          </div>
        </motion.div>

        <motion.div
          className="location__map"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Карта"
            src={EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
