import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// constants
import { routes } from "../../constants/routes";

// Components
import { Loadable } from "../../utils/routes.util";

// Pages
const HomePage = Loadable(lazy(() => import("../../pages/HomePage")));
const Adoption = Loadable(lazy(() => import("../../pages/Adoption")));
const NGOS = Loadable(lazy(() => import("../../pages/NGOS")));
const Medical = Loadable(lazy(() => import("../../pages/Medical")));
const ContactUs = Loadable(lazy(() => import("../../pages/ContactUs")));
const Camps = Loadable(lazy(() => import("../../pages/Camps")));
const Reporting = Loadable(lazy(() => import("../../pages/Reporting")));

const CustomRouter = () => {
  const routesToRender = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: routes.ADOPTION,
      element: <Adoption />,
    },
    {
      path: routes.REPORTING,
      element: <Reporting />,
    },
    {
      path: routes.NGOS,
      element: <NGOS />,
    },
    {
      path: routes.MEDICAL,
      element: <Medical />,
    },
    {
      path: routes.CONTACT,
      element: <ContactUs />,
    },
    {
      path: routes.CAMPS,
      element: <Camps />,
    },
  ];

  return useRoutes(routesToRender);
};

export default CustomRouter;
