import type { Pet } from "types/pet";

export const pets: Pet[] = [
  {
    id: "1",
    name: "Fluffy",
    age: 3,
    type: "cat",
    isMissing: false,
  },
  {
    id: "2",
    name: "Buddy",
    age: 5,
    type: "dog",
    isMissing: false,
  },
  {
    id: "3",
    name: "Whiskers",
    age: 2,
    type: "cat",
    isMissing: true,
  },
];
