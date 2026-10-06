import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { Task } from 'components/Task/Task';
import { getTasks, getFilter } from '../../redux/selectors';

const getVisibleContacts = (tasks, filter) => {
  switch (filter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilter);
  const visibleTasks = getVisibleContacts(tasks, filter);
  return (
    <ul>
      {visibleTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
