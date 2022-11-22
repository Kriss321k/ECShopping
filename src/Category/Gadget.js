/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ProdGadget from './Product/Gadget/ProdGadget'
import ShopItem from './ShopItem'
import './ShopItem.css'


const Gadget = (prop)=>{

    const Data = ProdGadget;

    // Filtered Data
    let [FilteredData,SetFilteredData] = useState(Data)

        // Add category when the specific checkbox is selected
        let [Category,setCategory] = useState([]); 

            // Filter out the unchecked in Category
            const Filter = (event)=>{
                if(event.target.checked){ setCategory(prevCategory=>{ return [...prevCategory,event.target.value] }) }
                else{
                    const ModCategory = [...Category]
                    const index = ModCategory.indexOf(event.target.value)
                    ModCategory.splice(index,1)
                    setCategory(ModCategory)    }       
            }

                useEffect(()=>{
                    let filter = Data.filter( (element)=>{if(Category.includes(element.type)) {return element} } )
                    SetFilteredData(filter)
                },[Category])

                useEffect(()=>{ if(Category.length==0){SetFilteredData(Data)} },[Category])


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
        <div className="ShopItemDiv">
            <div className="ListSection">
                <h3 className='ListTextHead'>Sub-Category List</h3>

                <h4 className='ListTextHead-sub'>Type</h4>
                <p className='ListCheckbox'><input type={"checkbox"} defaultValue="Camera" onChange={Filter}/><p>&nbsp;Camera</p></p>
                <p className='ListCheckbox'><input type={"checkbox"} defaultValue="Laptop" onChange={Filter}/><p>&nbsp;Laptop</p></p>
                <p className='ListCheckbox'><input type={"checkbox"} defaultValue="PC" onChange={Filter}/><p>&nbsp;PC</p></p>
                <p className='ListCheckbox'><input type={"checkbox"} defaultValue="Smartphone" onChange={Filter}/><p>&nbsp;Smartphone</p></p>
                <p className='ListCheckbox'><input type={"checkbox"} defaultValue="Smartwatch" onChange={Filter}/><p>&nbsp;Smartwatch</p></p>

            </div>
            
            <div className="ItemSection">
                <div className='ItemToptab'>
                    <h1 className='ItemTextHead'>Category " Gadget "</h1>
                    <div className='ItemSearchtab'>
                        <input type={"text"} onChange={SearchTrigger}/>
                        <FontAwesomeIcon className='ItemSearchtab-icon' icon={faMagnifyingGlass} />
                    </div>
                </div>
                
                <div className='ItemDivSection'>
                
                {FilteredData.map(element=>{
                    return (
                        <ShopItem key={element.id} ID={element.id} img={element.img} type={element.type}
                          name={element.name} dc={element.dc} price={element.price} detail={element.detail} clickAdd={propItem}/>
                    )
                })}

                </div>
            </div>
        </div>
    )
}

export default Gadget;