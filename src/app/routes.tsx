import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OneLernCaseStudyFull from "./pages/OneLernCaseStudyFull";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/case-study/onelern-assessments",
    element: <OneLernCaseStudyFull />,
  },
]);
