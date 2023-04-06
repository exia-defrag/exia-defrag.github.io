export interface IFeaturedPanel {
  id: number,
  prefix: string,
  txt: string,
  link?: string
}

export const FeaturedPanelData: Array<IFeaturedPanel> = [
  { id: 1, prefix: ">", txt: "Exia wishes you Ramadhan Mubarak"},
  { id: 2, prefix: ">", txt: "Currently on break,"},
  { id: 3, prefix: " ", txt: "will stream again after mid May 2023"}
]
