import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from 'redux2/slice';

export const Counter = () => {
  const { total } = useSelector(state => state.counter);

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())} type="button">
        +
      </button>
      <span>{total}</span>
      <button onClick={() => dispatch(decrement())} type="button">
        -
      </button>
    </div>
  );
};
