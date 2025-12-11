import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Internships",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Us",
        path: "/about",
        newTab: false,
      },
      {
        id: 45,
        title: "Internship Listings",
        path: "/internship-hub",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In ",
        path: "/signin",
        newTab: false,
      },
      {
        id: 42,
        title: "Create Account",
        path: "/signup",
        newTab: false,
      },
       {
        id: 47,
        title: "Contact Support",
        path: "/contact",
        newTab: false,
      },
      {
        id: 48,
        title: "Error ",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
