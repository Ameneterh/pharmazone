import albumin from "../assets/human-albumin.jpg";
import midazolam from "../assets/midazolam-inj.jpg";
import hydrocortisone from "../assets/hydrocortisone-10.jpg";
import pharma_avatar from "./pharmazone_avatar.png";

export const products = [
  {
    _id: "aaaaa",
    name: "Inj Human Albumin 20%",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 105000,
    image: [albumin],
    category: "nephrology",
    subCategory: "injection",
    cold_chain_required: true,
    logistics_included: false,
    bestSeller: true,
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
    category: "antirejection",
    subCategory: "tablet",
    cold_chain_required: false,
    logistics_included: true,
    bestSeller: false,
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
    category: "benzodiazepine",
    subCategory: "injection",
    cold_chain_required: false,
    logistics_included: true,
    bestSeller: true,
    expiry: 4,
    date: 1716634345447,
  },
  {
    _id: "aaaad",
    name: "Inj Midazolam 5mg/5mL",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 5000,
    image: [midazolam],
    category: "benzodiazepine",
    cold_chain_required: false,
    logistics_included: true,
    bestSeller: false,
    expiry: 4,
    date: 1716634345447,
  },
  {
    _id: "aaaae",
    name: "Inj Midazolam 5mg/5mL",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 10000,
    image: [midazolam],
    category: "benzodiazepine",
    cold_chain_required: false,
    logistics_included: true,
    bestSeller: true,
    expiry: 4,
    date: 1716634345447,
  },
  {
    _id: "aaaaf",
    name: "Inj Midazolam 5mg/5mL",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 4500,
    image: [midazolam],
    category: "benzodiazepine",
    cold_chain_required: false,
    logistics_included: true,
    bestSeller: false,
    expiry: 4,
    date: 1716634345447,
  },
];
