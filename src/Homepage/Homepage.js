import './Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMagnifyingGlassLocation, faShop, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

const Homepage = ()=> {
    return (
        <div className='HomepageDiv'>

            <div className='HomeDivRow1'>
                <p className='HomeDivRow1-Text'>ECShopping</p>
                <p></p>
                <p className='DCHomepageText'>The E-Commerce prototype website</p>
            </div>
            
            <div className='HomeDivRow2'>
                <FontAwesomeIcon className='Homepage-Icon' style={{color: "#ca712d"}} icon={faShop} />
                <p className='DCHomepageText' style={{textShadow: "2px 2px gray"}}>E-commerce  is </p>
                <p className='DCHomepageText' style={{fontSize: "20px"}}>- Convenient -</p>
                <p className='DCHomepageText' style={{fontSize: "20px"}}>- Fast -</p>
                <p className='DCHomepageText' style={{fontSize: "20px"}}>- Trackable -</p>
                <p className='DCHomepageText' style={{fontSize: "20px"}}>- Worldwide-Accessible -</p>
            </div>
            
            <div className='HomeDivRow3'>
                <FontAwesomeIcon className='Homepage-Icon' style={{color: "brown"}} icon={faFaceSmile} />
                <p className='DCHomepageText-Large' style={{color: "brown"}}>Convenient</p>
                <p className='DCHomepageText' style={{marginBottom:-20,marginTop:-20}}>----------------------------</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>You can totally purchase anything online</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>Just by Tapping on website</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>No need to go directly to the store</p>
                <p className='DCHomepageText'>----------------------------</p>
            </div>
            
            <div className='HomeDivRow4'>
                <FontAwesomeIcon className='Homepage-Icon' style={{color: "#b8ce38"}} icon={faTruckFast}/>
                <p className='DCHomepageText-Large' style={{color: "#b8ce38"}}>Fast</p>
                <p className='DCHomepageText' style={{marginBottom:-20,marginTop:-20}}>----------------------------</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>Quick Electronic purchase</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>in not many clicks</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>Click "purchase" and order is received</p>
                <p className='DCHomepageText'>----------------------------</p>
            </div>

            <div className='HomeDivRow5'>
                <FontAwesomeIcon className='Homepage-Icon' style={{color: "green"}} icon={faMagnifyingGlassLocation}/>
                <p className='DCHomepageText-Large' style={{color: "green"}}>Trackable</p>
                <p className='DCHomepageText' style={{marginBottom:-20,marginTop:-20}}>----------------------------</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>No order received? contact us</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>We will respond and act quick within 12 hours</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>Location Given or Refund if anything wrong happened</p>
                <p className='DCHomepageText'>----------------------------</p>
            </div>
                
            <div className='HomeDivRow6'>
                <FontAwesomeIcon className='Homepage-Icon' style={{color: "blue"}} icon={faGlobe} />
                <p className='DCHomepageText-Large' style={{color: "blue"}}>Worldwide-Accessible</p>
                <p className='DCHomepageText' style={{marginBottom:-20,marginTop:-20}}>----------------------------</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>No order received? contact us</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>We will respond and act quick within 12 hours</p>
                <p className='DCHomepageText' style={{marginBottom:-20}}>Location Given or Refund if anything wrong happened</p>
                <p className='DCHomepageText'>----------------------------</p>
            </div>
        </div>
    )
}

export default Homepage;