export interface ISchedule {
  id: number,
  day: string,
  time: string,
  title: string,
  description: string,

  scheduleLinks?: Array<IScheduleLink>
}

export interface IScheduleLink {
  id: number,
  btnTxt: string,
  btnLink: string,
  btnColor: string,
  isLocalLink: boolean
}

export const ScheduleData: Array<ISchedule> = [
  {
    id: 1, day: "Monday", time: "22:00 (GMT +8)", title: "Pokemon Inclement Emerald Monolocke", description: "Join me as I attempt to clear Pokemon Inclement Emerald with Monolocke Rules.",
    scheduleLinks: [
      { id: 1, btnTxt: "Progress", btnLink: "inclementEmeraldNuzlocke", btnColor: "", isLocalLink: true },
      { id: 2, btnTxt: "Watch on Twitch", btnLink: "https://www.twitch.tv/its_exia00", btnColor: "btn-secondary", isLocalLink: false }
    ]
  },
  // { id: 2, day: "Tuesday", time: "", title: "Rest Day", description: "I sleep", },
  // { id: 3, day: "Wednesday", time: "", title: "Rest Day", description: "I sleep", },
  // { id: 4, day: "Thursday", time: "", title: "Rest Day", description: "I sleep", },
  {
    id: 5, day: "Friday", time: "22:00 (GMT +8)", title: "Viewer Duels and Ranked @ Yu-Gi-Oh Master Duel", description: "Let's play! Or just watch me ladder on ranked.",
  },
  // { id: 6, day: "Saturday", time: "", title: "Rest Day", description: "I sleep", },
  // { id: 7, day: "Sunday", time: "", title: "Rest Day", description: "I sleep", },
]
