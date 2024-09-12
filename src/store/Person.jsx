import { create } from "zustand";
import {initialPeople} from '../utils/initialPeople';
export const usePersonStore = create((set) => ({
  people: initialPeople,
  nextId: 4,
  resetPerson: () => set((state) => ({
    person: {...state.person, firstName: "", lastName: "", gender: "", age: 0, id: state.nextId}
  })),
  addPerson: (person) => set((state) => ({
    people: [...state.people, {...person, id: state.nextId}],
    nextId: state.nextId + 1
  })),
  deletePerson: (id) => set((state) => ({
    people: state.people.filter(person => 
      person.id !== id
    )
  })),
  personToEdit: null,
  getId: (id) => set((state) => ({
    personToEdit: {...state.people.find(person => person.id === id)}
  })),
  updatePerson: (id, updatedPerson) => set((state) => ({
    people: state.people.map(person => 
      person.id === id ? {...person, ...updatedPerson} : person
    )
  })),
  resetPersonToEdit: () => set((state) => ({
    personToEdit: null
  }))
}))