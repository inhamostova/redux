import { useDispatch, useSelector } from 'react-redux';
import { StatusFilter } from './StatusFilter/StatusFilter';
import { TaskCounter } from './TaskCounter/TaskCounter';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { useEffect } from 'react';
import { fetchTasks } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.tasks.isLoading);
  const error = useSelector(state => state.tasks.error);
  const items = useSelector(state => state.tasks.items);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <>
      {/* <TaskCounter />
      <TaskForm />
      <StatusFilter /> */}
      {isLoading && <p>loading request...</p>}
      {error && <p>Something went wrong...</p>}
      {items.length > 0 && <TaskList />}
    </>
  );
};
