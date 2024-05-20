export const productList = () => {
    return fetch("https://663bae1afee6744a6ea28e1a.mockapi.io/products/")
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .catch((err) => {
            console.error('Error fetching products:', err);
            throw err;
        });
};
