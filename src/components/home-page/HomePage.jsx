import ProductFetcher from './ProductFetcher';
import ProductCard from './ProductCard';
import Carousel from './Carousel';
import '../../styles/homePage.css';

export default function HomePage() {
    return (
        <main className="HomePage">
            <section className="category" id='category-suggestions'>
                <h2 className='full-width'>Sugerencias de Productos</h2>
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
                                        <ProductCard
                                            key={product.id}
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                        />
                                    )}
                                />
                            ) : (
                                <div>No hay productos disponibles</div>
                            )
                        )
                    )}
                </ProductFetcher>
            </section>

            <section className="category" id='best-sellers'>
                <h2 className='full-width'>Lo más vendido</h2>
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
                                        <ProductCard
                                            key={product.id}
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                        />
                                    )}
                                />
                            ) : (
                                <div>No hay productos disponibles</div>
                            )
                        )
                    )}
                </ProductFetcher>
            </section>

            <section className="category" id='technology'>
                <h2 className='full-width'>Tecnología</h2>
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
                                        <ProductCard
                                            key={product.id}
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                        />
                                    )}
                                />
                            ) : (
                                <div>No hay productos disponibles</div>
                            )
                        )
                    )}
                </ProductFetcher>
            </section>

            <section className="category" id='home-section'>
                <h2 className='full-width'>Para el hogar</h2>
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
                                        <ProductCard
                                            key={product.id}
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                        />
                                    )}
                                />
                            ) : (
                                <div>No hay productos disponibles</div>
                            )
                        )
                    )}
                </ProductFetcher>
            </section>
        </main>
    );
}