import { ApplicationConstants } from '../../_constants/application.constants'

const c = ApplicationConstants

export const DataModel = {
  navigationLinks: [
    {
      display: 'Home',
      href: `${c.HOME}`,
      target: ""
    },
    {
      display: 'Recently Added',
      href: `${c.RECENT}`,
      target: ""
    },
    {
      display: 'My Favorites',
      href: `${c.FAVORITES}`,
      target: ""
    },
  ]
}