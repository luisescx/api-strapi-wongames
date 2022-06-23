import WongGamesLogo from "./extensions/assets/images/logo-won.svg";
import Logo from "./extensions/assets/images/logo.svg";
import FavIcon from "./extensions/assets/favicon.png";

export default {
  config: {
    auth: {
      logo: WongGamesLogo,
    },
    head: {
      favicon: FavIcon,
    },
    menu: {
      logo: Logo,
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Won games",
      },
      "pt-BR": {
        "global.content-manager": "Gestão de Conteúdo",
        "app.components.LeftMenu.navbrand.title": "Won games",
      },
    },
    locales: ["pt-BR"],
    tutorials: false,
  },
  bootstrap(app) {
    console.log(app);
  },
};
