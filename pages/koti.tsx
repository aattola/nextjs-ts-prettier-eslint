import { useStore } from '../components/state'

export default function Home() {
  const bears = useStore((state) => state.bears)
  const increasePopulation = useStore((state) => state.increasePopulation)
  return (
    <>
      <h1>{bears}</h1>
      <button type="button" onClick={increasePopulation}>
        Add Bear
      </button>
    </>
  )
}
