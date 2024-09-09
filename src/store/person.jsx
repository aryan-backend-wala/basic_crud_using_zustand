import { create } from "zustand";

export const usePersonStore = create((set) => ({
  person: {
    firstName: "",
    lastName: ""
  },
  people: [],
  createPerson: (newPerson) => set((state) => ({
    person: {...state.person, ...newPerson}
  })),
  resetPerson: () => set((state) => ({
    person: {firstName: "", lastName: ""}
  })),
  addPerson: (person) => set((state) => ({
    people: [...state.people, person]
  }))
}))