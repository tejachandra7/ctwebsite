import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OneLernCaseStudyFull from "./pages/OneLernCaseStudyFull";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/case-study/onelern-assessments",
    element: <OneLernCaseStudyFull />,
  },
]);
