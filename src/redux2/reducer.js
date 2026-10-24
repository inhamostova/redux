export const rootReducer = (state = { total: 0, step: 1 }, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        total: (state.total += action.payload),
      };
    case 'decrement':
      return {
        ...state,
        total: (state.total -= action.payload),
      };
    case 'setStep':
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
