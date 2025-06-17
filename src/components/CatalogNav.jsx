import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectCategory, fetchCategoriesRequest } from '../actions/actionCreators';

const CatalogNav = () => {
  const categories = useSelector((state) => state.categories.items);
  const selected = useSelector((state) => state.selectedCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);

  const handleCategoryClick = (id) => {
    dispatch(selectCategory(id));
  };

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categories.map((category) => (
        <li className="nav-item" key={category.id}>
          <button
            type="button"
            className={`nav-link ${selected === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CatalogNav;
