import { useState, useLayoutEffect } from "react";
import HomePage from "@/imports/HomePage/index";
import AboutUs from "@/imports/AboutUs/index";
import CorporatePage from "@/imports/CorporatePage/index";
import SharedFooter from "@/app/SharedFooter";

type Page = "home" | "about" | "corporate";

const NAV_RULES: Array<{ match: (text: string) => boolean; page: Page }> = [
  // Header nav
  { match: (t) => t === "Corporate Travel", page: "corporate" },
  // Footer / nav company links
  { match: (t) => t === "About Us", page: "about" },
  // CTA buttons (Link2 & Link3)
  { match: (t) => t === "Contact Us Today", page: "about" },
  { match: (t) => t === "Explore destinations", page: "about" },
  // Logo → home (matches the logo image wrapper)
  { match: (t) => t === "__logo__", page: "home" },
];

function ScaledPage({
  children,
  onNavigate,
}: {
  children: React.ReactNode;
  onNavigate: (page: Page) => void;
}) {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    function update() {
      setScale(Math.min(1, window.innerWidth / 1920));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function handleClick(e: React.MouseEvent) {
    const path = e.nativeEvent.composedPath() as HTMLElement[];

    // Logo click: any img whose alt contains "Cozmo" or whose parent is data-name Logo
    for (const el of path) {
      if (!(el instanceof HTMLElement)) continue;
      const dataName = el.getAttribute("data-name") ?? "";
      if (
        dataName === "Logo b 2" ||
        dataName === "Link" && el.querySelector('img[alt="Cozmo Travel"]')
      ) {
        e.preventDefault();
        onNavigate("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      // img alt check
      if (el instanceof HTMLImageElement && el.alt === "Cozmo Travel") {
        e.preventDefault();
        onNavigate("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    // Text-based nav rules
    for (const el of path) {
      if (!(el instanceof HTMLElement)) continue;
      const text = (el as HTMLElement).textContent?.trim() ?? "";
      for (const rule of NAV_RULES) {
        if (rule.match(text)) {
          e.preventDefault();
          onNavigate(rule.page);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      }
    }
  }

  return (
    <div className="relative w-full overflow-x-hidden" onClick={handleClick}>
      <style>{`
        /* Pointer on all named links and the logo */
        [data-name="Link"],
        [data-name="Margin"],
        [data-name="Logo b 2"],
        img[alt="Cozmo Travel"] { cursor: pointer; }

        /* Hide the built-in footer on every imported page so SharedFooter is the only one */
        [data-name="Home Page"]    > :last-child,
        [data-name="About us"]     > :last-child,
        [data-name="Corporate Page"] > :nth-last-child(2) { display: none !important; }

        /* Hide the stray floating Login button on Corporate Page */
        [data-name="Corporate Page"] > :last-child { display: none !important; }
      `}</style>
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: "1920px",
        }}
      >
        {children}
        {/* Shared footer replaces each page's built-in footer */}
        <SharedFooter />
      </div>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState<Page>("home");

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <div className="flex-1">
        <ScaledPage onNavigate={setActivePage}>
          {activePage === "home" && <HomePage />}
          {activePage === "about" && <AboutUs />}
          {activePage === "corporate" && <CorporatePage />}
        </ScaledPage>
      </div>
    </div>
  );
}
