import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from 'redux2/actions';

export const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <p>{todo.text}</p>
          <input
            onChange={() => dispatch(toggleTodo(todo.id))}
            checked={todo.completed}
            type="checkbox"
            name="completed"
          />
          <button onClick={() => dispatch(deleteTodo(todo.id))} type="button">
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
