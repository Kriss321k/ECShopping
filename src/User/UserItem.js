import { faFaceGrinBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./User.css"

const UserItem = (prop)=>{

    const {Name,Email,Address} = prop

    return(
        <div className="UserItem">
            <div className="User">
                <FontAwesomeIcon className="UserIcon" icon={faFaceGrinBeam} />
                <h4>{Name}</h4>
                <p>E-mail : {Email}</p>
                <p>City : {Address}</p>
            </div>
        </div>
    )
}

export default UserItem;