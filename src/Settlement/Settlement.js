import "./Settlement.css"
import { CircularProgress } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Settlement = (prop)=>{

    const {data} = prop

    const Navigate = useNavigate();

    return (
        <div className="SettlementDiv">
           <p className="SettlementDiv-boldtext">You're good to go!</p>
           <p className="SettlementDiv-text">{data[0]} Items bought, ${data[1]} payment successful</p>
           <p className="SettlementDiv-text">We will contact you for the delivery. Thank you for choosing ECShopping</p>
           <div className="Circle">
                <div className="Circle-circum">
                    <CircularProgress color='success' size={100} thickness={5}/>
                </div>
                <FontAwesomeIcon className="TrueIcon" icon={faCheck} />
           </div>

            <div className="SettlementDiv-btn">
                <button className="SettlementDiv-Homebtn" onClick={()=>Navigate("/")}>Back to home</button>
                <button className="SettlementDiv-Shopbtn" onClick={()=>Navigate("/Shop")}>To Shop</button>
            </div>

        </div>
    )
}

export default Settlement;