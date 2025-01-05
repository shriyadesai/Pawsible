import { routes } from "./routes";

// assets
import report from "../assets/report.svg";
import camp from "../assets/camp.svg";
import ngo from "../assets/ngo.svg";
import adopt from "../assets/adopt.svg";
import medical from "../assets/medical.svg";
import contact from "../assets/contact.svg";

export const navLinks = [
  {
    image: report,
    text: "Reporting",
    link: routes.REPORTING,
    key: 0,
  },
  {
    image: camp,
    text: "Camps",
    link: routes.CAMPS,
    key: 1,
  },
  {
    image: ngo,
    text: "NGOs",
    link: routes.NGOS,
    key: 2,
  },
  {
    image: adopt,
    text: "Adoption",
    link: routes.ADOPTION,
    key: 3,
  },
  {
    image: medical,
    text: "Medical History",
    link: routes.MEDICAL,
    key: 4,
  },
  {
    image: contact,
    text: "CONTACT US",
    link: routes.CONTACT,
    key: 5,
  },
];
