import { StatusFilter } from './StatusFilter/StatusFilter';
import { TaskCounter } from './TaskCounter/TaskCounter';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  // function palindrome(str) {
  //   const reverse = str.split('').reverse().join('');
  //   return str === reverse;
  // }
  return (
    <>
      <TaskCounter />
      <TaskForm />
      <StatusFilter />
      <TaskList />
    </>
  );
};
