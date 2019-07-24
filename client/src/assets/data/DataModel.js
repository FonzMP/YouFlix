import { ApplicationConstants } from "../../_constants/application.constants";

const c = ApplicationConstants;

export const DataModel = {
  navigationLinks: [
    {
      display: "Home",
      href: `${c.HOME}`,
      target: ""
    },
    {
      display: "Recently Added",
      href: `${c.RECENT}`,
      target: ""
    },
    {
      display: "My Favorites",
      href: `${c.FAVORITES}`,
      target: ""
    }
  ],
  sideBarContext: [
    {
      display: "Sports",
      icon: "running"
    },
    {
      display: "Music",
      icon: "music"
    },
    {
      display: "Gaming",
      icon: "headset"
    },
    {
      display: "Movie",
      icon: "video"
    },
    {
      display: "Television",
      icon: "tv"
    }
  ]
};
