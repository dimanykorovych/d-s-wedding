import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./Hero.scss";

import heroImg from "@assets/images/hero-bg.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <img
        src={heroImg}
        alt="Дмитро та Світлана"
        className="hero__bg"
        width={1536}
        height={1920}
      />

      <div className="hero__overlay"></div>

      <div className="hero__container container">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Запрошення на весілля
        </motion.p>
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <span className="hero__name">Дмитро</span>
          <span className="hero__amp amp amp--hero">&amp;</span>
          <span className="hero__name">Світлана</span>
        </motion.h1>

        <motion.p
          className="hero__date"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          19 · 09 · 2026
        </motion.p>
      </div>

      <motion.a
        href="#invitation"
        className="hero__more"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span className="hero__more-inner">
          Детальніше
          <ChevronDown size={18} strokeWidth={1.5} />
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
