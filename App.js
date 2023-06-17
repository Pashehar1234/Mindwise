import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Speaking from "./pages/Speaking";
import AboutUs from "./pages/AboutUs";
import GetInvolved from "./pages/GetInvolved";
import OurServices from "./pages/OurServices";
import Explore from "./pages/Explore";
import SelfAssessment from "./pages/SelfAssessment";
import Homepage from "./pages/Homepage";
import Main from "./pages/Main";
import { useEffect } from "react";

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
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/get-involved":
        title = "";
        metaDescription = "";
        break;
      case "/our-services":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/self-assessment":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/self-assessment" element={<SelfAssessment />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}
export default App;
