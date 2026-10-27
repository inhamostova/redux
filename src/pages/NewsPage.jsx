import { useEffect } from 'react';

import { getNews } from 'redux2/operations';
import { useDispatch, useSelector } from 'react-redux';

export const NewsPage = () => {
  const { news, isLoading, error } = useSelector(state => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <>
      {isLoading && <p>LOADING...</p>}
      {error && !isLoading && <p>Ooops, something went wrong</p>}
      {news?.length > 0 && !isLoading && (
        <ul>
          {news.map(item => (
            <li key={item.article_id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
