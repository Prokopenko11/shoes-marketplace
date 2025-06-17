import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.images[0]}
        className="card-img-top img-fluid" alt={item.title} />
      <div className="card-body">
        <p className="card-text">{item.title}</p>
        <div className="card-button-wrapper">
          <p className="card-text">{item.price}</p>
          <Link to={`/catalog/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
        </div>
      </div>
    </div>
  )
}

export default Card;