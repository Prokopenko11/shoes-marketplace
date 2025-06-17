import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemRequest } from '../actions/actionCreators';
import Preloader from '../components/Preloader';
import { addToCart } from '../actions/actionCreators';

const ItemPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { item, loading, error } = useSelector(state => state.item);

  useEffect(() => {
    dispatch(fetchItemRequest(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <Preloader />
    )
  };

  if (error) {
    return (
      <p className="error-text">{error}</p>
    )
  };

  if (!item) {
    return null;
  };

  const sizes = item.sizes;

  const handleIncrement = () => {
    setQuantity(q => Math.min(10, q + 1));
  };

  const handleDecrement = () => {
    setQuantity(q => Math.max(1, q - 1));
  };

  const handleCartAdd = () => {
    dispatch(addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      size: selectedSize,
      quantity,
    }));
  }

  return (
    <PageWrapper>
      <Banner />
      <section className="catalog-item">
        <h2 className="text-center">{item.title}</h2>
        <div className="row">
          <div className="col-5">
            <img src={item.images[0]}
              className="img-fluid" alt={item.title} />
          </div>
          <div className="col-7">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Артикул</td>
                  <td>{item.sku}</td>
                </tr>
                <tr>
                  <td>Производитель</td>
                  <td>{item.manufacturer}</td>
                </tr>
                <tr>
                  <td>Цвет</td>
                  <td>{item.color}</td>
                </tr>
                <tr>
                  <td>Материалы</td>
                  <td>{item.material}</td>
                </tr>
                <tr>
                  <td>Сезон</td>
                  <td>{item.season}</td>
                </tr>
                <tr>
                  <td>Повод</td>
                  <td>{item.reason}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <p>Размеры в наличии:
                {sizes
                  .filter(size => size.available)
                  .map((s, index) => (
                    <span
                      key={index}
                      className={`catalog-item-size${selectedSize === s.size ? ' selected' : ''}`}
                      onClick={() => setSelectedSize(s.size)}
                      style={{ cursor: 'pointer' }}
                    >
                      {s.size}
                    </span>
                  ))}
              </p>
              <p>Количество:
                <span className="btn-group btn-group-sm pl-2">
                  <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
                  <span className="btn btn-outline-primary">{quantity}</span>
                  <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
                </span>
              </p>
            </div>
            <Link to="/cart">
              <button
                className="btn btn-danger btn-block btn-lg"
                disabled={!selectedSize}
                onClick={handleCartAdd}
              >
                В корзину
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ItemPage;