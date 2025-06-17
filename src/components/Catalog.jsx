import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { fetchItemsRequest } from '../actions/actionCreators';
import Preloader from './Preloader';
import CatalogNav from './CatalogNav';

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, loading, error, offset, hasMore } = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(fetchItemsRequest());
  }, [dispatch]);

  const fetchNewItems = () => {
    dispatch(fetchItemsRequest(offset));
  }

  if (loading && items.length === 0) {
    return (
      <>
        <CatalogNav />
        <Preloader />
      </>
    );
  }

  if (error) {
    return (
      <p className="error-text">{error}</p>
    );
  }

  if (!items || items.length === 0) {
    return (
      <CatalogNav />
    );
  }

  return (
    <>
      <CatalogNav />
      <div className="row">
        {items.map((item) => (
          <div className="col-4 card-wrapper" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
      {hasMore && !loading && (
        <div className="text-center">
          <button
            onClick={fetchNewItems}
            className="btn btn-outline-primary"
          >
            Загрузить ещё
          </button>
        </div>
      )}

      {loading && (
        <div className="text-center">
          <Preloader />
        </div>
      )}
    </>
  );
};

export default Catalog;