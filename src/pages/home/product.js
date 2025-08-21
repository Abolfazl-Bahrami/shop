import { useContext } from "react";
import { ShopContext} from "../../context/ShopContext";


 const Product = (props)=>{
    const {id , productName , price , productImage} = props.data;
    const {cartItem  , addCart , removeCart} = useContext(ShopContext);
    const isInCart = cartItem?.some(item=>item.id === id);
return(
    <div className="col-3 ">
        <img alt="product" src={productImage} className="w-100 mt-3" style={{height : "200px"}}></img>
        <h5>{productName}</h5>
        <p> price : {price}$</p>
        <button className="btn btn-info btn-sm "  onClick={()=>addCart(id)}>+</button>
        <span className="mx-2">{cartItem?.filter((row)=>row.id === id)[0]?.count}</span>
       {isInCart && <button className="btn btn-danger btn-sm " onClick={()=>removeCart(id)}>-</button>}
    </div>
)
}

export default Product;