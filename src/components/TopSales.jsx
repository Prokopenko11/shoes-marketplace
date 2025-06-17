import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { fetchTopSalesRequest } from '../actions/actionCreators';
import Preloader from './Preloader';

const TopSales = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.topSales);

  useEffect(() => {
    dispatch(fetchTopSalesRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Preloader />
      </section>
    );
  }

  if (error) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж</h2>
        <p className="error-text">{error}</p>
      </section>
    );
  }

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-4" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSales;