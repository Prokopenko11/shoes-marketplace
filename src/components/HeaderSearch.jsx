import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderSearch = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (!searchVisible) {
      setSearchVisible(true);
    } else {
      if (searchQuery.trim() === '') {
        setSearchVisible(false);
      } else {
        navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  const totalQuantity = useSelector(state =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      setSearchVisible(false);
    } else {
      navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="header-controls-pics">
      <div
        data-id="search-expander"
        className="header-controls-pic header-controls-search"
        onClick={handleSearchClick}
      ></div>
      <Link to="/cart" className="header-cart">
        <div className="header-controls-pic header-controls-cart">
          {totalQuantity > 0 && <div className="header-controls-cart-full">{totalQuantity}</div>}
          <div className="header-controls-cart-menu"></div>
        </div>
      </Link>
      <form
        data-id="search-form"
        className={`header-controls-search-form form-inline ${!searchVisible ? 'invisible' : ''}`}
        onSubmit={handleSubmit}
      >
        <input
          className="form-control"
          placeholder="Поиск"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={inputRef}
        />
      </form>
    </div>
  );
};

export default HeaderSearch;
