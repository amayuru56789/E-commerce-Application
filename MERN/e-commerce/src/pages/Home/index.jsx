import { useDispatch } from "react-redux";
import { useHistory } from "react-router"
import { addToCart } from "../../features/cartSlice";

import { useGetAllProductQuery } from "../../features/productApi";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductQuery();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        history.push("/cart");
    };

    return ( 
        <div className="home-container">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured..</p>
            ) : (
                <>
                <h2>New Arrivals</h2>
                <div className="products">
                    {data?.map( product => <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <div className="detail">
                            <span>{product.desc}</span>
                            <span className="price">${product.price}</span>
                        </div>
                        <button onClick={() => handleAddToCart(product)}>
                            Add To Cart
                        </button>
                    </div>)}
                </div>
                </>
            )}
        </div>
     );
}
 
export default Home;