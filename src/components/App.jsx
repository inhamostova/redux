import { StatusFilter } from './StatusFilter/StatusFilter';
import { TaskCounter } from './TaskCounter/TaskCounter';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  return (
    <>
      <TaskCounter />
      <TaskForm />
      <StatusFilter />
      <TaskList />
    </>
  );
};
