import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from 'redux2/actions';

export const Counter = () => {
  const { total, step } = useSelector(state => state);

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment(step))} type="button">
        +
      </button>
      <span>{total}</span>
      <button onClick={() => dispatch(decrement(step))} type="button">
        -
      </button>
    </div>
  );
};
