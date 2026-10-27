import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">News</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/todos">Todos</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
