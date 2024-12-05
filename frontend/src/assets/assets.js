import albumin from "./human-albumin.jpg";
import midazolam from "./midazolam-inj.jpg";
import hydrocortisone from "./hydrocortisone-10.jpg";
import pharma_avatar from "./pharmazone_avatar.png";

export const products = [
  {
    _id: "aaaaa",
    name: "Inj Human Albumin 20%",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 105000,
    image: [albumin],
    category: "Plasma Substitute",
    cold_chain_required: true,
    logistics_included: false,
    expiry: 4,
    date: 1716634345448,
  },
  {
    _id: "aaaab",
    name: "Tab Hydrocortisone 10mg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 15000,
    image: [hydrocortisone],
    category: "Antirejection",
    cold_chain_required: false,
    logistics_included: true,
    expiry: 4,
    date: 1716634345449,
  },
  {
    _id: "aaaac",
    name: "Inj Midazolam 5mg/5mL",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 9000,
    image: [midazolam],
    category: "Benzodiazepine",
    cold_chain_required: false,
    logistics_included: true,
    expiry: 4,
    date: 1716634345447,
  },
];
