import Banner from '../components/Banner';
import PageWrapper from '../components/PageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { removeFromCart, fetchOrderRequest } from '../actions/actionCreators';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { success, error } = useSelector(state => state.order);
  const [form, setForm] = useState({ phone: '', address: '', agreed: false });

  const handleRemove = (index) => {
    dispatch(removeFromCart(index))
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      owner: {
        phone: form.phone,
        address: form.address,
      },
      items: cart.map(item => ({
        id: item.id,
        price: item.price,
        count: item.quantity,
      })),
    };

    dispatch(fetchOrderRequest(order));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <PageWrapper>
      <Banner />
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        {success ? (
          <div className="alert alert-success text-center">Заказ успешно оформлен!</div>
        ) : cart.length === 0 ? (
          <p className="text-center">Корзина пуста</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Название</th>
                <th>Размер</th>
                <th>Кол-во</th>
                <th>Цена</th>
                <th>Итого</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.size}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price} руб.</td>
                  <td>{(item.price * item.quantity)} руб.</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(index)}>
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="text-right">Общая стоимость</td>
                <td>{total} руб.</td>
              </tr>
            </tbody>
          </table>
        )}
      </section>

      {cart.length > 0 && !success && (
        <section className="order">
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+7 (XXX) XXX-XX-XX"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input
                  className="form-control"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Адрес"
                  required
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreement"
                  name="agreed"
                  checked={form.agreed}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
              </div>
              {error && <div className="text-danger mb-2">{error}</div>}
              <button type="submit" className="btn btn-outline-secondary">Оформить</button>
            </form>
          </div>
        </section>
      )}
    </PageWrapper>
  );
};

export default CartPage;
