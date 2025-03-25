import { decrement, increment, incrementBy, reset, selectCount } from "../../store/redux/counter-reducer";
import { useAppDispatch, useAppSelector } from "../../store/redux/store";

export default function ReduxCounter(){
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementBy(10))}>+10</button>
      </div>
    </div>
  );
}