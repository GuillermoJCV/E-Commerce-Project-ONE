export const productList = () => {
    return fetch("https://api-v3-alurageek.vercel.app/api/products")
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
