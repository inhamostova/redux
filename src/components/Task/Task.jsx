import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(deleteTask(task.id));

  const handleChange = () => dispatch(toggleTask(task.id));

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.text}</p>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};
