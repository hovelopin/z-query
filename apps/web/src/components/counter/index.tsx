import { useCounterStore } from "../../store/use-couter-store"

export default function Counter(){
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const reset = useCounterStore((state) => state.reset)
  const incrementBy = useCounterStore((state) => state.incrementBy)

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => incrementBy(10)}>+10</button>
      </div>
    </div>
  )
}