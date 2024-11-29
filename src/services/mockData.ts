import { Navs, TreeItems } from "@/types";

export const homepageNav: TreeItems = [
  {
    id: "10f052f2-595c-485a-af20-c2b2fe1aeab2",
    name: "HomePage",
    link: "/",
    children: [],
  },
  {
    id: "20f052f2-595c-485a-af20-c2b2fe1aeab2",
    name: "Blog",
    link: "/blog",
    children: [],
  },
  {
    id: "30f052f2-595c-485a-af20-c2b2fe1aeab2",
    name: "Services",
    link: "/services",
    children: [
      {
        id: "40f052f2-595c-485a-af20-c2b2fe1aeab2",
        name: "Service a",
        link: "/service/service-a",
        children: [],
      },
      {
        id: "50f052f2-595c-485a-af20-c2b2fe1aeab2",
        name: "Service b",
        link: "/service/service-b",
        children: [],
      },
    ],
  },
];

export const navs: Navs = [
  { id: "60f052f2-595c-485a-af20-c2b2fe1aeab2", items: homepageNav },
];
