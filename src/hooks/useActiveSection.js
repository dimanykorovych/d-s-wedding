import { useEffect, useState } from "react";

const useActiveSection = (links, headerRef) => {
  const [active, setActive] = useState(links[0]?.id ?? "");

  useEffect(() => {
    const sections = links
      .map(({ id }) => ({ id, el: document.getElementById(id) }))
      .filter(({ el }) => el);

    const handleScroll = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const probe = headerHeight + 20;

      let current = links[0]?.id ?? "";
      let bestTop = -Infinity;

      for (const { id, el } of sections) {
        const top = el.getBoundingClientRect().top;

        if (top <= probe && top > bestTop) {
          bestTop = top;
          current = id;
        }
      }

      setActive((prev) => (prev !== current ? current : prev));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [links, headerRef]);

  return active;
};

export default useActiveSection;
