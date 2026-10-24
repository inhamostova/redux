// import { useDispatch, useSelector } from 'react-redux';
// import { StatusFilter } from './StatusFilter/StatusFilter';
// import { TaskCounter } from './TaskCounter/TaskCounter';
// import { TaskForm } from './TaskForm/TaskForm';
// import { TaskList } from './TaskList/TaskList';
// import { useEffect } from 'react';
// import { fetchTasks } from '../redux/operations';
// import { selectError, selectIsLoading, selectTasks } from '../redux/selectors';
import { Counter } from './Counter/Counter';
import { SetStepForm } from './SetStepForm/SetStepForm';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const items = useSelector(selectTasks);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);
//   return (
//     <>
//       <TaskCounter />
//       <TaskForm />
//       <StatusFilter />
//       {isLoading && <p>loading request...</p>}
//       {error && <p>{error}</p>}
//       {items.length > 0 && <TaskList />}
//     </>
//   );
// };

export const App = () => {
  return (
    <>
      <SetStepForm />
      <Counter />
    </>
  );
};
