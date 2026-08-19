import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating "back to top" button, shown after scrolling one viewport. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-4 z-40 inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-card-hover)] transition-colors hover:bg-primary/90"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
