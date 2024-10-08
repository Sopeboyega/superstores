import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const  StoreContext = createContext(null)
const StoreContextProvider = (props) => {
// Here useState function is used to manage the cartState
 const [cartItems,setCartItems] = useState({});
//This addToCart function below checks if an item does not exist in the cart using the itemId
// 
 const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
 }

 const  removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }

 useEffect(()=>{
console.log(cartItems)
 },[cartItems])


//The context holds the value that would be accessible to any component
const contextValue ={
food_list,
cartItems,
setCartItems,
addToCart,
removeFromCart,
}
return (
    // Everything inside this component should have access to the value I provide
    // In this case which is context value below (addtoCart function,food_list and so on)
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>

)

}


export default StoreContextProvider;




