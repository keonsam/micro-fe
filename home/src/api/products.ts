const API_URL = `http://localhost:8080`
export const getProduct = () => {
    return fetch(`${API_URL}/products`).then((data) => data.json());
};

export const getProductById = (id) => {
    return fetch(`${API_URL}/products/${id}`).then((data) => data.json());
};

