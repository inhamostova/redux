import { useDispatch } from 'react-redux';
import { addTodo } from 'redux2/slice';

export const TodoForm = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { value } = form.elements.text;
    dispatch(addTodo(value));

    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="text" />
      <button type="submit">Add todo</button>
    </form>
  );
};
