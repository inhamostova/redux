export const increment = value => ({ type: 'increment', payload: value });

export const decrement = value => ({ type: 'decrement', payload: value });

export const setStep = step => ({ type: 'setStep', payload: step });
