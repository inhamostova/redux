import { useSelector } from 'react-redux';
import { selectTaskCount } from '../../redux/selectors';

export const TaskCounter = () => {
  const counter = useSelector(selectTaskCount);
  return (
    <div>
      <p>Active: {counter.active}</p>
      <p>Completed: {counter.completed}</p>
    </div>
  );
};
