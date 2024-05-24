import { useGetAllProductQuery } from "../../features/productApi";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductQuery(id);
    return ( 
        <h1>Home</h1>
     );
}
 
export default Home;