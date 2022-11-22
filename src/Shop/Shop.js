import { faBook, faMobileScreenButton, faShirt, faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Shop.css"

const Shop = ()=>{

    const Navigate = useNavigate()
    
    return (
        <div className="ShopDiv">

            <div className="ShopDiv-box-top" onClick={()=>Navigate("/Shop/AllProducts")}>
                <FontAwesomeIcon className="ShopIcon-top" icon={faStarAndCrescent}/>
                <FontAwesomeIcon className="ShopIcon-top" icon={faStarAndCrescent}/>
                <FontAwesomeIcon className="ShopIcon-top" icon={faStarAndCrescent}/>
                <p className="ShopText-top" >All Products</p>
                <FontAwesomeIcon className="ShopIcon-top" style={{rotate:"180deg"}} icon={faStarAndCrescent}/>
                <FontAwesomeIcon className="ShopIcon-top" style={{rotate:"180deg"}} icon={faStarAndCrescent}/>
                <FontAwesomeIcon className="ShopIcon-top" style={{rotate:"180deg"}} icon={faStarAndCrescent}/>
            </div>

            <div className="ShopDiv-box-bottom">
                <div className="ShopDiv-box" onClick={()=>Navigate("/Shop/Fashion")}>
                    <FontAwesomeIcon className="ShopIcon" style={{color:"rgb(224, 158, 78)"}} icon={faShirt}/>
                    <p style={{color:"rgb(224, 158, 78)"}}>Fashion</p>
                </div>
                <div className="ShopDiv-box" onClick={()=>Navigate("/Shop/Book")}>
                    <FontAwesomeIcon className="ShopIcon"  style={{color:"rgb(116, 112, 107)"}} icon={faBook}/>
                    <p style={{color:"rgb(116, 112, 107)"}}>Book</p>
                </div>
                <div className="ShopDiv-box" onClick={()=>Navigate("/Shop/Gadget")}>
                    <FontAwesomeIcon className="ShopIcon" style={{color:"rgb(79, 159, 180)"}} icon={faMobileScreenButton}/>
                    <p style={{color:"rgb(79, 159, 180)"}}>Gadget</p>
                </div>
            </div>
            
        </div>
    )
}

export default Shop;