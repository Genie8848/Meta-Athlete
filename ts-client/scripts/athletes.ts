
export interface Athlete {
  id: string,
  name: string,
  kind: string,
  sports: string,
  birthdate: string,
  athleteBirthplace: string,
  weight: number,
  height: number,
  photo: string,
}

export const TEST_ATHLETES: Athlete[] = [
  {
    id: "1",
    name: "John Doe",
    kind: "0",
    sports: "0",
    birthdate: "19990909",
    athleteBirthplace: "San Francisco",
    weight: 82.5,
    height: 1.80,
    photo: ""
  },
  {
    id: "2",
    name: "Bobby Smith",
    kind: "1",
    sports: "1",
    birthdate: "20000101",
    athleteBirthplace: "Califonia",
    weight: 78,
    height: 1.83,
    photo: ""
  },
  {
    id: "3",
    name: "Kyle Abrams",
    kind: "2",
    sports: "2",
    birthdate: "20040202",
    athleteBirthplace: "New York",
    weight: 75,
    height: 1.75,
    photo: ""
  },
  {
    id: "4",
    name: "David Simpson",
    kind: "3",
    sports: "3",
    birthdate: "19890505",
    athleteBirthplace: "Washington",
    weight: 85,
    height: 1.90,
    photo: ""
  },
]
