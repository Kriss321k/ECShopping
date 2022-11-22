/* eslint-disable */
import "./Cart.css"
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = (prop)=>{

    const Navigate = useNavigate();

    const {cartAdd} = prop

    const ProductArray = cartAdd.map(element=>{ return element })
    const Product = ProductArray.map(element=>{ return element[0] })

    // Set up By-pass Data to use for Input Data to display/Remove Data
    const [Data,SetData] = useState([])

        // By pass the default Raw Data into Data without any condition change required
        useEffect(()=>{ SetData(Product) },[Product.length])


    // State for Dynamic-displayed Total Sum number ( init = 0 )
    const [Sum,SetSum] = useState(0)
    // State for Dynamic-displayed Total Qty number ( init = 0 )
    const [Qty,SetQty] = useState(0)
    
        // Prop "total" from CartItem to link with button clicking
        const Total = ()=>{

            let DivLength = document.getElementsByClassName("CartDiv-item-area")[0].children.length     // Item Div count length
            const DivArea = document.getElementsByClassName("CartDiv-item-area")[0]                     // Div Area ( used for children extraction )

            let value = 0
            let qty = 0

            for(let i=0; i<=DivLength-1; i++){
                let Num = DivArea.children[i].children[0].children[3].innerHTML.split("")   
                Num.splice(0,1)
                let priceNum = parseFloat((Num.join("")),10)                                            // Remove Dollar Sign from Displayed Data
                value = value + priceNum                                                                // Loop Sum of all (Quantity * Price)

                let ValueQty = DivArea.children[i].children[0].children[2].children[0].children[1].value
                qty = qty + parseInt(ValueQty,10)                                                       // // Loop Sum of Qty count
            }
            
            SetSum(value)
            SetQty(qty)
        }
    
    // Prop the remove item ID to App
    const RemoveOne = (removeTarget)=>{ 
        prop.IDRemovetarget(removeTarget.id)
        
        const targetQty = removeTarget.children[2].children[0].children[1].value
        const targetNumText = removeTarget.children[1].innerHTML.split("")
            targetNumText.splice(0,1)
            let targetPrice = parseFloat((targetNumText.join("")),10) 
    
        const removeSum = targetPrice*targetQty;
        
        SetSum(prevSum=>{ return prevSum-removeSum})
        SetQty(prevQty=>{ return prevQty-targetQty})
    }

    // Clear the By-pass Data from cart Clicking event
    const ClearCart = ()=>{
        prop.removeAll([])
        SetSum(0)
        SetQty(0)

    }


    // Purchase Clicking event

    const [Invalid,setInvalid] = useState(true);

    useEffect(()=>{
        if(Sum>0&&Qty>0){ setInvalid(false) }
        else{ setInvalid(true) }
    },[Qty,Sum])
    

    const PurchaseClick = ()=>{
        Navigate("/Settlement")
        const CartData = [Qty,Sum]
        prop.data(CartData)
        prop.removeAll([])
        SetSum(0)
        SetQty(0)
    }
    

    return (
        <div className="CartDiv">
            <h2>Cart</h2>
            <table className="CartDiv-Table">
                <th className="CartDiv-header" style={{marginLeft:"-10px"}}>
                    <p className="CartDiv-column">Item</p>
                    <p className="CartDiv-column">Price</p>
                    <p className="CartDiv-column">Quantity</p>
                    <p className="CartDiv-column">Total</p>
                    <p className="CartDiv-column"></p>
                </th>

                <div className="CartDiv-item-area">
                    {Data.map( (element)=>{ 
                        return <CartItem key={element.id} ID={element.id} img={element.img} 
                                         price={element.price} total={Total} removeOne={RemoveOne}/> } )}
                </div>
                
                <tbody className="CartDiv-item" style={{marginLeft:"-15px"}}> 
                    <p className="CartDiv-column"></p>
                    <p className="CartDiv-column"></p>
                    <p className="CartDiv-column" style={{marginLeft:"70px",marginRight:"15px",fontSize:"18px",fontWeight:"bolder"}}>{Qty}</p>
                    <p className="CartDiv-column" style={{marginRight:"-12px",fontWeight:"bolder",fontSize:"18px"}}>${Sum}</p>
                    <p className="CartDiv-column"></p>
                </tbody>
                
                
            </table>

            <div className="CartDiv-bottom">
                <button onClick={ClearCart}>Clear cart</button>
                <button onClick={PurchaseClick} disabled={Invalid}>Purchase</button>
            </div>           
        </div>
    )
}

export default Cart;