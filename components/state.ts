import create from 'zustand'

interface BearState {
  bears: number
  increasePopulation: () => void
}

const useStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}))

export { useStore }
