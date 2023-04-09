export interface IGame {
  id: number,
  name: string,
  defineMe: boolean
}

export const GameData: Array<IGame> = [
  { id: 1, name: "Armored Core 3", defineMe: true },
  { id: 2, name: "Final Fantasy 9", defineMe: true },
  { id: 3, name: "Final Fantasy Tactics", defineMe: true },
]
