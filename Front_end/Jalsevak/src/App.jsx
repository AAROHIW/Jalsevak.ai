import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import JalSevakAiAnalystDashboard from "./pages/JalSevakAiAnalystDashboard";
import JalSevakAIFieldWorkerDashboard from "./pages/JalSevakAIFieldWorkerDashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/jalsevakai-field-worker-dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<JalSevakAiAnalystDashboard />} />
      <Route
        path="/jalsevakai-field-worker-dashboard"
        element={<JalSevakAIFieldWorkerDashboard />}
      />
    </Routes>
  );
}
export default App;
