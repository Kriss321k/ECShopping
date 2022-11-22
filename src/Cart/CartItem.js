/* eslint-disable */
import { useEffect, useState } from "react";


const CartItem = (prop)=>{

    const {ID,price,img} = prop;

    // Quantity Change clicking event
    let [Qty,setQty] = useState(0)

        const Decrease = ()=>{
                if(Qty>0){
                    setQty(val=>{return val-1})
                }
                else{ setQty(0) }   
            }

        const Increase = ()=>{
                if(Qty>=0){ 
                    setQty(val=>{return val+1})
                }
                else{ setQty(0) }   
            }

    // The change in Qty value will trigger prop function "total" to Cart
    useEffect(()=>{
        prop.total();
    },[Qty])
    
    const RemoveBTN = (click)=>{ prop.removeOne(click.target.parentElement.parentElement); }
        

    return (
    <div>
        <tbody className="CartDiv-item" id={ID}> 
            <p className="CartDiv-column" style={{marginLeft:"10px"}}><img className="CartDiv-column-img" src={img} alt=""/></p>
            <p className="CartDiv-column" style={{marginLeft:"25px"}}>${price}</p>
            <p className="CartDiv-column">
                <span className="CartDiv-BtnInp" style={{marginLeft:"25px"}}>
                    <button className="CartDiv-btn" onClick={Decrease}>-</button>
                    <input className="CartDiv-input" value={Qty} onChange/>
                    <button className="CartDiv-btn" onClick={Increase}>+</button>
                </span>
            </p>
            <p className="CartDiv-column" style={{marginLeft:"25px"}}>${price*Qty}</p>
            <p className="CartDiv-column">
                <button className="CartDiv-RemoveBtn" onClick={RemoveBTN}>Remove</button>
            </p>
        </tbody>
    </div>
    )
}

export default CartItem;