import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productList } from '../../../services/productServices';
import '../../../styles/productInfo.css';
import ProductFetcher from '../../home-page/ProductFetcher';
import ProductInfoCard from './ProductInfoCard';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import Carousel from '../../home-page/Carousel';

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
                        <figure className="card-img-container">
                            <img
                                className="card-img"
                                src={product.image}
                                alt={product.name}
                            />
                        </figure>
                    </article>
                    {/* Sección 2 de imagenes*/}
                    <section className='product__img__container'>
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
                                        <Carousel
                                            items={products}
                                            renderItem={product => (
                                                <Link to={`/product/${product.id}`} key={product.id}>
                                                    <figure>
                                                        <img
                                                            className="card-container--img"
                                                            src={product.image}
                                                            alt={product.name}
                                                        />
                                                    </figure>
                                                </Link>
                                            )}
                                        />
                                    ) : (
                                        <div>No hay productos disponibles</div>
                                    )
                                )
                            )}
                        </ProductFetcher>
                    </section>
                </div>
                <aside className="product-info--aside">
                    <h2>Nombre del producto</h2>
                    <p className='aside-info'>Categoría</p>
                    <div className="aside-container-category">
                        <div className='aside-category-1'></div>
                        <div className='aside-category-2'></div>
                        <div className='aside-category-3'></div>
                        <div className='aside-category-4'></div>
                    </div>
                    <p className='aside-price'>{product.price}</p>
                    <AddToCartButton />
                    <p className='aside-shipment'>Opciones de envío</p>
                    <button className='aside-button'>
                        CORREOS
                        <a>Verifiicar</a>
                    </button>
                    <hr className="aside-divider" />
                    <h3>Detalles de fabricación</h3>
                    <p className='aside-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur, turpis non convallis ultricies, velit nulla vehicula elit, nec bibendum sem justo at orci. Aliquam erat volutpat. Curabitur nec varius purus.</p>
                    <h3>Acciones asociadas</h3>
                    <div className="rectangle-container">
                        <div className="rectangle"></div>
                        <div className="rectangle"></div>
                        <div className="rectangle"></div>
                    </div>
                </aside>
                
            </div>
            {/* Sección 3 de productos relacionados*/}
            <section className="product-info--section">
                <h2 className='full-width'>PRODUCTOS RELACIONADOS</h2>
                <article>
                    <h3>CATEGORÍA 1</h3>
                    <h3>CATEGORÍA 2</h3>
                    <h3>CATEGORÍA 3</h3>
                    <h3>CATEGORÍA 4</h3>
                </article>
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
                                            <div className='product__info--img'>
                                            <div className='product__info--category'>
                                                1
                                            </div>
                                            <ProductInfoCard
                                                name={product.name}
                                                price={product.price}
                                                image={product.image}
                                            />
                                            
                                            </div>
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
