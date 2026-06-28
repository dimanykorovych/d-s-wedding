import useScrolled from "@/hooks/useScrolled";
import "./Header.scss";
import cn from "clsx";
import useActiveSection from "@/hooks/useActiveSection";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import useHeaderHeight from "@/hooks/useHeaderHeight";

const links = [
  { id: "hero", label: "Головна" },
  { id: "invitation", label: "Запрошення" },
  { id: "countdown", label: "Відлік" },
  { id: "schedule", label: "Розклад" },
  { id: "location", label: "Локація" },
  { id: "gallery", label: "Галерея" },
  { id: "social", label: "Контакти" }
];

const Header = () => {
  const headerRef = useRef(null);

  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(50);
  const active = useActiveSection(links, headerRef);

  useHeaderHeight(headerRef);

  return (
    <header
      ref={headerRef}
      className={cn("header", scrolled && "header--scrolled", open && "header--scrolled")}
    >
      <div className="header__container container">
        <a href="#hero" className="header__logo">
          Д <span className="header__amp amp">&amp;</span> С
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__list">
            {links.map((link) => (
              <li key={link.id} className="header__item">
                <a
                  href={`#${link.id}`}
                  className={cn(
                    "header__link",
                    active === link.id && "header__link--active"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="header__burger"
          aria-label="Меню"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="header__mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="header__mobile-list">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`header__mobile-link ${
                      active === link.id ? "header__mobile-link--active" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
