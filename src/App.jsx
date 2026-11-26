import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
  useNavigationType,
} from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { setNavigate } from "./utils/goTo";

// Every page, by address. Keeping the loader here lets a page start downloading
// as soon as someone points at (or touches) a link to it.
const pages = [
  ["/", () => import("./pages/Home")],
  ["/about", () => import("./pages/About")],
  ["/blog", () => import("./pages/Blog")],
  ["/contact", () => import("./pages/Contact")],
  ["/products", () => import("./pages/Products")],
  ["/services", () => import("./pages/Services")],
  ["/updates", () => import("./pages/Updates")],
  ["/Appointment", () => import("./pages/Appointment")],
  ["/Care", () => import("./components/Care")],

  ["/Multi-Specialty-Consultations", () => import("./clinical-care/Multi-Specialty Consultations")],
  ["/Integrated-Doctor-Led-Team", () => import("./clinical-care/Integrated Doctor-Led Team")],
  ["/ContinuumofCare", () => import("./clinical-care/Continuum of Care")],
  ["/AdvancedDiagnostics", () => import("./clinical-care/Advanced Diagnostics")],

  ["/EmergencySupport", () => import("./seamless-access/Emergency Support")],
  ["/PatientCoordination", () => import("./seamless-access/PatientCoordination")],
  ["/GroundAmbulance", () => import("./seamless-access/GroundAmbulance")],
  ["/HomeBasedSupport", () => import("./seamless-access/HomeBasedSupport")],

  ["/PersonCentricRehab", () => import("./rehabilitation/PersonCentricRehab")],
  ["/ComprehensiveNeuroRehab", () => import("./rehabilitation/ComprehensiveNeuroRehab")],
  ["/TherapeuticModalities", () => import("./rehabilitation/Therapeutic Modalities")],
  ["/WellnessPreventiveCare", () => import("./rehabilitation/WellnessPreventiveCare")],

  ["/GeriatricPeople", () => import("./audience/GeriatricPeople")],
  ["/PerioperativePatients", () => import("./audience/PerioperativePatients")],
  ["/PalliativePatients", () => import("./audience/PalliativePatients")],
  ["/LongevityEnthusiasts", () => import("./audience/LongevityEnthusiasts")],
  ["/FamiliesLivingAway", () => import("./audience/FamiliesLivingAway")],
  ["/LivingAlone", () => import("./audience/LivingAlone")],
  ["/SoleCaregiver", () => import("./audience/SoleCaregiver")],
  ["/NewbornCare", () => import("./audience/NewbornCare")],
].map(([path, load]) => ({ path, load, Page: lazy(load) }));

const legalLoader = () => import("./pages/Legal");
const Legal = lazy(legalLoader);

const loaders = new Map(pages.map(({ path, load }) => [path.toLowerCase(), load]));
["/privacy", "/terms", "/cookies"].forEach((path) => loaders.set(path, legalLoader));

// The internal address a link points to, or null if it should be left to the browser.
const internalPath = (link) => {
  if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return null;
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return null;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  return url;
};

function SiteBehaviour() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const navigate = useNavigate();

  useEffect(() => setNavigate(navigate), [navigate]);

  // A new page opens at the top. Back/forward keeps the browser's remembered position,
  // and links to a section (#id) keep scrolling to that section.
  useLayoutEffect(() => {
    if (navigationType !== "POP" && !hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, navigationType]);

  useEffect(() => {
    // Plain <a href="/page"> links would reload the whole site, so send them through the router.
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = internalPath(event.target.closest?.("a[href]"));
      if (!url || !loaders.has(url.pathname.toLowerCase())) return;
      event.preventDefault();
      navigate(url.pathname + url.search + url.hash);
    };

    // Start fetching a page as soon as someone shows they are about to open it.
    const preload = (event) => {
      const url = internalPath(event.target.closest?.("a[href]"));
      if (url) loaders.get(url.pathname.toLowerCase())?.();
    };

    document.addEventListener("click", onClick);
    document.addEventListener("pointerover", preload, { passive: true });
    document.addEventListener("touchstart", preload, { passive: true });
    document.addEventListener("focusin", preload);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("pointerover", preload);
      document.removeEventListener("touchstart", preload);
      document.removeEventListener("focusin", preload);
    };
  }, [navigate]);

  return null;
}

function PageLoading() {
  return (
    <div className="page-loading" role="status" aria-label="Loading page">
      <span className="page-loading-spinner" />
    </div>
  );
}

function AppRoutes() {
  const { pathname } = useLocation();

  // The key gives every address its own loading boundary. Without it the router keeps
  // the previous page on screen until the next one has finished downloading.
  return (
    <Suspense key={pathname} fallback={<PageLoading />}>
      <Routes>
        {pages.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/privacy" element={<Legal page="privacy" />} />
        <Route path="/terms" element={<Legal page="terms" />} />
        <Route path="/cookies" element={<Legal page="cookies" />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter useTransitions={false}>
      <SiteBehaviour />
      <Header />

      <main className="main-content">
        <AppRoutes />
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
