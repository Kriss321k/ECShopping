/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ProdBook from './Product/Book/ProdBook'
import ShopItem from './ShopItem'
import './ShopItem.css'
import ProdFashion from './Product/Fashion/ProdFashion';
import ProdGadget from './Product/Gadget/ProdGadget';


const AllProd = (prop)=>{

    const BookData = ProdBook;
    const FashionData = ProdFashion;
    const GadgetData = ProdGadget;
    
    const Data = BookData.concat(FashionData,GadgetData);

    // Filtered Data
    let [FilteredData,SetFilteredData] = useState(Data)

        // Search Filter Event
        const SearchTrigger = (event)=>{

            if(event.target.value === "") { SetFilteredData(Data) }
            if(event.target.length!=0){

                let searchLength = event.target.value.length;

                let filterSearch = Data.filter(item=>{
                    let TrimName = item.name.slice(0,searchLength).toLowerCase()                        
                    
                    return TrimName.match(event.target.value.toLowerCase())
                })

                SetFilteredData(filterSearch)
            }
        }

        // Get ID from Shopitem and prop filtered chosen Product to App (Child => Parent)
        const propItem = (addedID)=>{ 

            const ProductAdd = Data.filter(item=>{ return item.id==addedID })

            prop.AddItem(ProductAdd) 
        }


    return (
        <div className="ShopItemDiv" style={{justifyContent:'center'}}>

            <div className="ItemSection">
                <div className='ItemToptab' style={{justifyContent:'center'}}>
                    <h1 className='ItemTextHead' style={{textDecoration:"underline"}}>All Products</h1>
                    <div className='ItemSearchtab'>
                        <input type={"text"} onChange={SearchTrigger} />
                        <FontAwesomeIcon className='ItemSearchtab-icon' icon={faMagnifyingGlass} />
                    </div>
                </div>
                
                <div className='ItemDivSection'>
                
                {FilteredData.map(element=>{
                    return (
                    <ShopItem key={element.id} ID={element.id} img={element.img} type={element.type} 
                      name={element.name} dc={element.dc} price={element.price} detail={element.detail} clickAdd={propItem} />
                    )
                })}
                
                </div>
                
            </div>
        </div>
    )
}

export default AllProd;