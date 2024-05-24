import { productApi, useGetAllProductQuery } from "../../features/productApi";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductQuery();
    return ( 
        <div className="home-container">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured..</p>
            ) : (
                <>
                <h2>New Arrivals</h2>
                <div className="product">
                    {data?.map( product => <div key={product.id} className="product">
                        <h3>{productApi.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <div className="detail">
                            <span>{product.desc}</span>
                            <span className="price">${product.price}</span>
                        </div>
                        <button>Add To Cart</button>
                    </div>)}
                </div>
                </>
            )}
        </div>
     );
}
 
export default Home;