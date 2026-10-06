import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const counter = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p>Active: {counter.active}</p>
      <p>Completed: {counter.completed}</p>
    </div>
  );
};
