import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper/modules";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BiSolidHeart } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";

import g2 from "@assets/images/galery/g2.jpg";
import g3 from "@assets/images/galery/g3.jpg";
import g4 from "@assets/images/galery/g4.jpg";
import g5 from "@assets/images/galery/g5.jpg";

import v1 from "@assets/videos/video1.mp4";

import "./Gallery.scss";

const photos = [
  { src: g2, alt: "Посмішка наречених" },
  { src: g3, alt: "Прогулянка біля озера" },
  { src: g4, alt: "Друзі на весіллі" },
  { src: g5, alt: "Ніжний букет" }
];

const videos = [{ src: v1, poster: g2 }];

export default function Gallery() {
  const [openIdx, setOpenIdx] = useState(null);
  const swiperRef = useRef(null);

  const close = useCallback(() => setOpenIdx(null), []);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, close]);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <motion.h2
          className="section__title  section__title--gallery"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ми
          <BiSolidHeart className="section__title--icon" />
        </motion.h2>
        <div className="section__divider" />
        <p className="section__subtitle">Моменти, які надихають нас на цей день</p>

        <div className="gallery__grid">
          {photos.map((photo, i) => (
            <motion.button
              key={i}
              type="button"
              className={`gallery__tile gallery__tile--${(i % 5) + 1}`}
              onClick={() => setOpenIdx(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              aria-label={`Відкрити зображення: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.button>
          ))}
        </div>

        <div className="section__divider" />

        <div className="gallery__videos">
          {videos.map(({ src, poster }, i) => (
            <motion.div
              key={i}
              className="gallery__video"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <video controls preload="none" poster={poster} loop>
                <source src={src} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            className="gallery__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="gallery__lb-close" onClick={close} aria-label="Закрити">
              <X />
            </button>
            <button
              className="gallery__lb-nav gallery__lb-nav--prev"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Попереднє"
            >
              <ChevronLeft />
            </button>
            <button
              className="gallery__lb-nav gallery__lb-nav--next"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Наступне"
            >
              <ChevronRight />
            </button>

            <Swiper
              modules={[Navigation, Keyboard, A11y]}
              initialSlide={openIdx}
              keyboard={{ enabled: true }}
              spaceBetween={20}
              slidesPerView={1}
              loop
              onSwiper={(s) => (swiperRef.current = s)}
              className="gallery__lb-swiper"
            >
              {photos.map(({ src, alt }, i) => (
                <SwiperSlide key={i}>
                  <div className="gallery__lb-slide">
                    <img src={src} alt={alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
