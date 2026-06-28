import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import "./Social.scss";

const people = [
  {
    name: "Дмитро",
    role: "Наречений",
    phone: "+48 732 752 104",
    phoneHref: "tel:+48732752104",
    socials: [
      {
        icon: <FaInstagram strokeWidth={1.5} />,
        label: "Instagram",
        handle: "@nykorovych.d20",
        url: "https://instagram.com/nykorovych.d20"
      },
      {
        icon: <FaTelegramPlane strokeWidth={1.5} />,
        label: "Telegram",
        handle: "@NDV_97",
        url: "https://t.me/NDV_97"
      },
      {
        icon: <FaWhatsapp strokeWidth={1.5} />,
        label: "WhatsApp",
        handle: "+48 732 752 104",
        url: "https://wa.me/48732752104"
      },
      {
        icon: <FaFacebookF strokeWidth={1.5} />,
        label: "Facebook",
        handle: "Dmytro Nykorovych",
        url: "https://facebook.com/nykorovych.d20"
      }
    ]
  },

  {
    name: "Світлана",
    role: "Наречена",
    phone: "+48 793 412 478",
    phoneHref: "tel:+48793412478",
    socials: [
      {
        icon: <FaInstagram strokeWidth={1.5} />,
        label: "Instagram",
        handle: "@svitlana_m27",
        url: "https://www.instagram.com/svitlana_m27"
      },
      {
        icon: <FaTelegramPlane strokeWidth={1.5} />,
        label: "Telegram",
        handle: "@svitlana_makoviichuk",
        url: "https://t.me/svitlana_makoviichuk"
      },
      {
        icon: <FaWhatsapp strokeWidth={1.5} />,
        label: "WhatsApp",
        handle: "+48 793 412 478",
        url: "https://wa.me/48793412478"
      }
    ]
  }
];

const Social = () => {
  return (
    <section id="social" className="section section--alt contacts">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Контакти
        </motion.h2>
        <div className="section__divider" />
        <p className="section__subtitle">Ми завжди з вами на зв'язку!</p>

        <div className="contacts__grid">
          {people.map((p, idx) => (
            <motion.div
              key={p.name}
              className="contacts__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <span className="contacts__role">{p.role}</span>
              <h3 className="contacts__name">
                Контакти {p.name === "Світлана" ? "Світлани" : "Дмитра"}
              </h3>

              <div className="contacts__divider-line" aria-hidden="true" />

              <a
                href={p.phoneHref}
                className="contacts__phone"
                aria-label={`Зателефонувати ${p.name}`}
              >
                <span className="contacts__phone-icon">
                  <Phone strokeWidth={1.5} />
                </span>
                <span className="contacts__phone-num">{p.phone}</span>
              </a>

              <div className="contacts__socials-list">
                {p.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contacts__social"
                    aria-label={`${s.label} ${p.name}`}
                  >
                    <span className="contacts__social-icon">{s.icon}</span>
                    <span className="contacts__social-meta">
                      <span className="contacts__social-label">{s.label}</span>
                      <span className="contacts__social-handle">{s.handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
