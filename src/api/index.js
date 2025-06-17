export const fetchTopSales = async () => {
  const response = await fetch('https://ra-diploma-server.onrender.com/api/top-sales');
  if (!response.ok) {
    throw new Error(response.statusText)
  };
  return await response.json();
};

export const fetchCategories = async () => {
  const response = await fetch('https://ra-diploma-server.onrender.com/api/categories');
  if (!response.ok) {
    throw new Error(response.statusText);
  };
  return await response.json();
};

export const fetchItems = async ({ offset = 0, categoryId = null, query = '' }) => {
  const params = new URLSearchParams({ offset });

  if (categoryId && categoryId !== 0) {
    params.set('categoryId', categoryId)
  };

  if (query) {
    params.set('q', query);
  }

  const response = await fetch(`https://ra-diploma-server.onrender.com/api/items?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText)
  };
  return await response.json();
};

export const fetchItem = async (id) => {
  const response = await fetch(`https://ra-diploma-server.onrender.com/api/items/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText)
  };
  return await response.json();
};

export const fetchOrder = async (order) => {
  const response = await fetch('https://ra-diploma-server.onrender.com/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return true;
};