/* eslint-disable */
import './ShopItem.css'


const ShopItem = (prop)=>{

    // Prop from Book, Fashion, Gadget to display in ItemDiv
    const {ID,img,type,name,dc,price,detail} = prop;

    // Read more button clicking event, expanding Div for more detail
    const ReadToggle = (event)=>{
        const MainItemDiv = event.target.parentElement.parentElement.parentElement

        // switching between "Read more" and "back" + toggle hidden/readmore classlist
        if(event.target.innerHTML == "Read more"){
            event.target.innerHTML = "back"
            MainItemDiv.classList.replace("ItemDiv-display","ItemDiv-readmore")
            MainItemDiv.children[1].classList.replace("ReadmoreDiv-hidden","ReadmoreDiv")
        }else{
                MainItemDiv.classList.add("Fadeout")
                MainItemDiv.children[1].classList.add("Fadeout")  

            setTimeout(() => {
                MainItemDiv.classList.replace("ItemDiv-readmore","ItemDiv-display")
                MainItemDiv.children[1].classList.replace("ReadmoreDiv","ReadmoreDiv-hidden")
                MainItemDiv.classList.remove("Fadeout")
                MainItemDiv.children[1].classList.remove("Fadeout") 
            }, 1000)
            
            event.target.innerHTML = "Read more"
        }
    }


    //***** Add to Cart clicking event (prop item ID to Product Component)
    const AddToCart = (event)=>{

        const newID = String(event.target.parentElement.parentElement.parentElement.id)

        prop.clickAdd(newID)
    }


    return (
        <div className='ItemDiv-display' id={ID}>
            <div className='ItemDiv'>
                <img src={img} alt={img}/>
                <p className='ItemDiv-name'>{name} </p>
                <p className='ItemDiv-dc' style={{textDecoration: 'underline double'}}>Type : {type}</p>
                <p className='ItemDiv-dc'>{dc}</p>
                <p className='ItemDiv-price'>price : ${price}</p>
                <div className='ItemDiv-bar'>
                    <button className='ItemDiv-bar-btn' onClick={AddToCart}>Add to Cart</button>
                    <button className='ItemDiv-bar-btn' onClick={ReadToggle}>Read more</button>
                </div> 
            </div>
            <div className='ReadmoreDiv-hidden'>
                <p className='Readmore-header'>Description</p>
                <p className='Readmore-detail'>{detail}</p>
            </div>
        </div>
            
    )
}

export default ShopItem;