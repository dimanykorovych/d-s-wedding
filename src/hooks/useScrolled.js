import { useEffect, useState } from "react";

const useScrolled = (offset = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > offset;

      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return scrolled;
};

export default useScrolled;
