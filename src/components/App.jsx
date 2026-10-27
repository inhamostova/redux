import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { CounterPage } from 'pages/CounterPage';
import { TodosPage } from 'pages/TodosPage';
import { NewsPage } from 'pages/NewsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<NewsPage />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="todos" element={<TodosPage />} />
      </Route>
    </Routes>
  );
};
