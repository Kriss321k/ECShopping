import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./User.css"
import UserItem from "./UserItem";

const User = ()=>{

    const [UserData,setUserData] = useState([]);

    useEffect(()=>{
        async function Response() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json()
                setUserData(data)
        }
        Response();
    },[])
    

    const Data = UserData;

    return(
        <div className="UserDiv">
            <p className="UserHeader">User List</p>
            <p className="UserHeader-lower">
                <FontAwesomeIcon icon={faLongArrowAltDown}/>
                &nbsp;Users&nbsp;
                <FontAwesomeIcon icon={faLongArrowAltDown}/>
            </p>
        
            {Data.map(element=>{
                return (
                    <UserItem key={element.id} Name={element.name} 
                                UName={element.username} Email={element.email} Address={element.address.city}/>
                )
            })} 
        </div>
    )
}

export default User;