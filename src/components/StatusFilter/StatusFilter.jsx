import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { Button } from 'components/Button/Button';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/actions';

export const StatusFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = filter => {
    dispatch(changeFilter(filter));
  };

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
