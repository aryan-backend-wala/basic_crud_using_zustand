import { create } from "zustand";

export const useCounterStore = create((set) => ({
  counter: 0,
  anotherCounter: 100,
  incrementCounter: () => set((state) => ({
    counter: state.counter + 1
  })),
  decrementCounter: () => set((state) => ({
    counter: state.counter - 1
  })),
  setCounter: (value) => set(() => ({
    counter: value
  })),
  resetCounter: () => set((state) => ({
    counter: 0,
    anotherCounter: 90
  }))
}))
