// import { useEffect } from 'react';

// import { getNews } from 'redux2/operations';
// import { useDispatch, useSelector } from 'react-redux';
import { useGetNewsQuery } from 'redux2/rtkquery';

export const NewsPage = () => {
  const { data, isLoading, isError } = useGetNewsQuery();
  // console.log(data.results);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getNews());
  // }, [dispatch]);
  return (
    <>
      {isLoading && <p>LOADING...</p>}
      {isError && !isLoading && <p>Ooops, something went wrong</p>}
      {data?.results?.length > 0 && !isLoading && (
        <ul>
          {data?.results.map(item => (
            <li key={item.article_id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
