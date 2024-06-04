import { useParams } from 'react-router-dom';
import { productList } from '../../services/productServices';
import { useEffect, useState } from 'react';
import '../../styles/productInfo.css';
import ProductFetcher from '../home-page/ProductFetcher';
import ProductCard from '../home-page/ProductCard';
import { Link } from 'react-router-dom';

export default function ProductInfo() {
    const { productId } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        productList()
            .then((products) => {
                const foundProduct = products.find((item) => item.id === productId);
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    throw new Error('No se encontró el producto.');
                }
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });
    }, [productId]);

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    return (
        <main>
            <div className="product-info-container">
                <div className="product-details">
                    <article className="product-info">
                        <figure>
                            <img
                                className="card-img"
                                src={product.image}
                                alt={product.name}
                            />
                        </figure>
                    </article>
                    <section className='product__img__container'>
                        <article>
                            <figure className='product__info'>
                                <img
                                    className="card-container--img product-images" 
                                    src={product.image}
                                />
                                <img
                                    className="card-container--img product-images"
                                    src={product.image}
                                />
                                <img
                                    className="card-container--img product-images"
                                    src={product.image}
                                />
                            </figure>
                        </article>
                    </section>
                </div>
                <aside className="product-info--aside">
                    <h2>Nombre del producto</h2>
                    <p>Categoría</p>
                    <p>{product.price}</p>
                    <button className="button__car">Agregar al carrito</button>
                </aside>
            </div>

            <section className="product-info--section">
                <h2 className='full-width'>PRODUCTOS RELACIONADOS</h2>
                <div className='product__info'>
                    <ProductFetcher>
                        {(products, error) => (
                            error ? (
                                <div className="full-width">
                                    <h3 className="error">{error}</h3>
                                    <img
                                        className="error-image"
                                        src="assets/image/sin-conexion.svg"
                                        alt="No hay conexión"
                                    />
                                </div>
                            ) : (
                                Array.isArray(products) && products.length > 0 ? (
                                    products.map(product => (
                                        <Link to={`/product/${product.id}`} key={product.id}>
                                            <ProductCard
                                                name={product.name}
                                                price={product.price}
                                                image={product.image}
                                            />
                                        </Link>
                                    ))
                                ) : (
                                    <div>No hay productos disponibles</div>
                                )
                            )
                        )}
                    </ProductFetcher>
                </div>
            </section>
        </main>
    );
}