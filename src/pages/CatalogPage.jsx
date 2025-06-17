import Catalog from '../components/Catalog';
import Banner from '../components/Banner';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCategory, setSearchQuery, resetItems, fetchItemsRequest } from '../actions/actionCreators';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get('q') || '';

  const [input, setInput] = useState(initialQuery);

  useEffect(() => {
    setInput(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    dispatch(selectCategory(0));
    dispatch(selectCategory(0));
    dispatch(setSearchQuery(initialQuery));
    dispatch(resetItems());
    dispatch(fetchItemsRequest(0));
  }, [dispatch, initialQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(input));
    dispatch(resetItems());
    dispatch(fetchItemsRequest(0));
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
              <input
                className="form-control"
                placeholder="Поиск"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
            <Catalog />
          </section>
        </div>
      </div>
    </main>
  )
}

export default CatalogPage;