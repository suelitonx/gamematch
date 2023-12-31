import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Categorias",
    newTab: false,
    submenu: [
      {
        id: 55000,
        title: "MMORPG",
        path: "/public/categorias/mmorpg",
        newTab: false
      },
      {
        id: 55001,
        title: "Atirador",
        path: "/public/categorias/shooter",
        newTab: false
      },
      {
        id: 55002,
        title: "MOBA",
        path: "/public/categorias/moba",
        newTab: false
      },
      {
        id: 55003,
        title: "Anime",
        path: "/public/categorias/anime",
        newTab: false
      },
      {
        id: 55003,
        title: "Battle Royale",
        path: "/public/categorias/battle-royale",
        newTab: false
      },
      {
        id: 55004,
        title: "Estratégia",
        path: "/public/categorias/strategy",
        newTab: false
      },
      {
        id: 55005,
        title: "Fantasia",
        path: "/public/categorias/fantasy",
        newTab: false
      },
      {
        id: 55007,
        title: "Ficção Científica",
        path: "/public/categorias/sci-fi",
        newTab: false
      },
      {
        id: 55008,
        title: "Cartas",
        path: "/public/categorias/card",
        newTab: false
      },
      {
        id: 55009,
        title: "Corrida",
        path: "/public/categorias/racing",
        newTab: false
      },
      {
        id: 55009,
        title: "Luta",
        path: "/public/categorias/fighting",
        newTab: false
      },
      {
        id: 55010,
        title: "Social",
        path: "/public/categorias/social",
        newTab: false
      },
      {
        id: 55011,
        title: "Esportes",
        path: "/public/categorias/sports",
        newTab: false
      },
    ]
  },
  {
    id: 4,
    title: "Pesquisar",
    newTab: false,
    submenu: [
      {
        id: 66000,
        title: "Pesquisar MMORPG",
        path: "/public/all/mmorpg",
        newTab: false
      },
      {
        id: 66001,
        title: "Pesquisar Atirador",
        path: "/public/all/shooter",
        newTab: false
      },
      {
        id: 66003,
        title: "Pesquisar Battle Royale",
        path: "/public/all/battle-royale",
        newTab: false
      },
      {
        id: 66004,
        title: "Pesquisar Estratégia",
        path: "/public/all/strategy",
        newTab: false
      },
      {
        id: 66006,
        title: "Pesquisar Ficção Científica",
        path: "/public/all/sci-fi",
        newTab: false
      },
      {
        id: 66008,
        title: "Pesquisar Cartas",
        path: "/public/all/card",
        newTab: false
      },
      {
        id: 66009,
        title: "Pesquisar Corrida",
        path: "/public/all/racing",
        newTab: false
      },
      {
        id: 66009,
        title: "Pesquisar Luta",
        path: "/public/all/fighting",
        newTab: false
      },
      {
        id: 66010,
        title: "Pesquisar Social",
        path: "/public/all/social",
        newTab: false
      },
      {
        id: 66011,
        title: "Pesquisar Esportes",
        path: "/public/all/sports",
        newTab: false
      },
    ],
  },
  {
    id: 33,
    title: "Top 2023",
    path: "/public/top",
    newTab: false,
  },
  {
    id: 13211,
    title: "Random",
    path: "/public/random",
    newTab: false,
  },
  
  
  /*
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  */
  
];
export default menuData;
