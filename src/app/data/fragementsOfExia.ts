export interface IExiaFragement {
  id: number,
  title: string,
  link?: string,
  badge?: string,
  show: boolean
}

export const ExiaFragmentData: Array<IExiaFragement> = [
  { id: 1, title: "Twitch", link: "https://www.twitch.tv/its_exia00", show: true},
  { id: 2, title: "YouTube", link: "https://www.youtube.com/@exia0000", show: true},
  { id: 3, title: "Twitter", link: "https://twitter.com/exiadefrag", show: true},
  { id: 4, title: "Discord", badge: "Coming Soon", show: true},
]
