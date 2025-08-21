import PRODUCTS from "../../data/products";
import Product from "./product";


const Home = ()=>{
    return(
        <div>
            <h1>Home</h1>
            <div className="row">
                {PRODUCTS.map((productsData)=> <Product data={productsData} key={productsData.id}/>)}
            </div>
        </div>
    )
}

export default Home ;