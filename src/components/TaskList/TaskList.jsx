import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectVisisbleTasks } from '../../redux/selectors';

export const TaskList = () => {
  const tasks = useSelector(selectVisisbleTasks);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
