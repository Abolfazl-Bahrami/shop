import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import PRODUCTS from "../../data/products";
import Product from "../home/product";

const Shop = ()=>{
    const {cartItem} = useContext(ShopContext)
    return(
        <div>
            <h1>Shop</h1>
            {PRODUCTS.map((p)=>{
                if(cartItem.some((i)=>i.id === p.id && i.count > 0))
                return <Product data={p}/>
            })}
        </div>
    )
}

export default Shop;