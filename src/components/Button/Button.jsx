export const Button = ({ children, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ background: selected ? 'blue' : 'transparent' }}
      type="button"
    >
      {children}
    </button>
  );
};
