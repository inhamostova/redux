import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(addTask(form.elements.task.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="task" placeholder="Enter task text..." />
      <button type="submit">Add task</button>
    </form>
  );
};
