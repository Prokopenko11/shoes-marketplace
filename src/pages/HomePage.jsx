import Banner from '../components/Banner';
import TopSales from '../components/TopSales';
import Catalog from '../components/Catalog';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../actions/actionCreators';

const HomePage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(selectCategory(0));
  }, [dispatch]);

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <TopSales />
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <Catalog />
          </section>
        </div>
      </div>
    </main>
  )
}

export default HomePage;