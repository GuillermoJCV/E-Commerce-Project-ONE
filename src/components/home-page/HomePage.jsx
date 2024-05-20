import ProductFetcher from './ProductFetcher';
import ProductCard from './ProductCard';
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
                                    src="assets/images/sin-conexion.svg"
                                    alt="No hay conexión"
                                />
                            </div>
                        ) : (
                            Array.isArray(products) ? (
                                products.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        name={product.name}
                                        price={product.price}
                                        image={product.image}
                                        punctuation={product.punctuation}
                                    />
                                ))
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
