import { create } from "zustand";

export const usePersonStore = create((set) => ({
  person: {
    id: 0,
    firstName: "",
    lastName: ""
  },
  nextId: 1,
  people: [],
  
  createPerson: (newPerson) => set((state) => ({
    person: { ...state.person, ...newPerson }
  })),
  
  resetPerson: () => set((state) => ({
    person: { firstName: "", lastName: "", id: state.nextId }
  })),

  addPerson: (person) => set((state) => ({
    people: [...state.people, { ...person, id: state.nextId }],
    nextId: state.nextId + 1
  })),

  deletePerson: (id) => set((state) => ({
    people: state.people.filter((person) => person.id !== id)
  })),

  updatePerson: (id, updatedPerson) => set((state) => ({
    people: state.people.map((person) =>
      person.id === id ? { ...person, ...updatedPerson } : person
    )
  }))
}));
