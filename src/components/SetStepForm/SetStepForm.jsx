import { useDispatch, useSelector } from 'react-redux';
import { setStep } from 'redux2/actions';

export const SetStepForm = () => {
  const { step } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { value } = form.elements.value;

    dispatch(setStep(Number(value)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="value" defaultValue={step} />
      <button type="submit">Set Value</button>
    </form>
  );
};
