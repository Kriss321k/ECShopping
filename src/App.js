/* eslint-disable */
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCartArrowDown, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import User from './User/User'; import Statistics from './Statistics/Statistics';
import Book from "../src/Category/Book"; import Fashion from "../src/Category/Fashion"; import Gadget from "../src/Category/Gadget";
import Shop from './Shop/Shop'; import Cart from './Cart/Cart'; import Settlement from "./Settlement/Settlement";
import { useEffect, useState } from 'react';
import AllProd from './Category/AllProd';

function App() {

  // Cart To Settlement Page
  const [SettlementData,SetSettlementData] = useState([])
  
      const DataFromCart = (element)=>{
        SetSettlementData(element)
      }

  

  // ShopItem => (Products) => App => Cart
  const [AddedItem,setAddedItem] = useState([])

    // Add to Cart (From Shopitem)
    const AddingItem = (newItem)=>{ setAddedItem(prevItem=>{
      
      const prevArrayID = AddedItem.map(item=>{ return item[0].id })
      const newID = newItem[0].id
      

      if(!prevArrayID.includes(newID)){ return [...prevItem,newItem] } else{ return [...prevItem] } 
    } ) }


  // From Cart to App (to Modify Product list)

    // Clear All products
    const ClearAll = (clear)=>{ setAddedItem(clear) }

    // Remove One product
    const ModAddedItem = (RemoveID)=>{

      let Modified = AddedItem.filter(item=>{ return item[0].id!=RemoveID } )
      setAddedItem(Modified)
    }


    // Toggle to display or hide Cart
  const CartToggle = ()=>{
    const Cartbox = document.getElementsByClassName("HiddenCart")[0];
    if(Cartbox.classList == "HiddenCart"){
      Cartbox.classList.toggle("Cart");
    }else{
      Cartbox.classList.toggle("HiddenEffect")
    }
  }
      // Cart Amount display (red div beside CartIcon)
      const CartAmount = AddedItem.length;

        // If Cart Amount > 0, display the red div with number (Only focusing on CartAmount)
      useEffect(()=>{
        CartAmount==0? document.getElementsByClassName("CartAmount")[0].classList.add("Hidden") 
                  : document.getElementsByClassName("CartAmount")[0].classList.remove("Hidden")
      },[CartAmount])

      

  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="BrandText" to="/"><FontAwesomeIcon className="TruckIcon" icon={faTruck}/>&nbsp;ECShopping</NavLink>
        <nav className="Navbar">
          <NavLink className="Navbar-btn" to="/">Home</NavLink>
          <NavLink className="Navbar-btn" to="/Shop">Shop</NavLink>
          <NavLink className="Navbar-btn" to="/User">User</NavLink>
          <NavLink className="Navbar-btn" to="/Statistics">Statistics</NavLink>
          <div className='CartIconDiv'>
            <FontAwesomeIcon className="CartIcon" icon={faCartArrowDown} onClick={CartToggle}/>
            <p className='CartAmount'>{CartAmount}</p>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/Shop' element={<Shop/>} />

          <Route path="/Shop/AllProducts" element={<AllProd AddItem={AddingItem}/>} />
          <Route path="/Shop/Fashion" element={<Fashion AddItem={AddingItem}/>} />
          <Route path="/Shop/Book" element={<Book AddItem={AddingItem}/>} />              
          <Route path="/Shop/Gadget" element={<Gadget AddItem={AddingItem}/>} />

        <Route path='/User' exact element={<User/>} />
        <Route path='/Statistics' exact element={<Statistics/>} />

        <Route path='/Settlement' exact element={<Settlement data={SettlementData} />}/>
      </Routes>
      
      <div className='HiddenCart'>
        <Cart cartAdd={AddedItem} removeAll={ClearAll} IDRemovetarget={ModAddedItem} data={DataFromCart} />
      </div>
      
      

      <footer className="App-footer">
        <p className='footer-textBold'>Contact Us : &nbsp;</p>
        <FontAwesomeIcon className='footer-icon' icon={faPhone} />
        <p className='footer-text'><b>Tel:</b> 034-123-1234</p>
        <FontAwesomeIcon className='footer-icon' icon={faEnvelope} />
        <p className='footer-text'><b>Email:</b> Support@ECShopping.com</p>
      </footer>
    </div>
  );
}

export default App;
