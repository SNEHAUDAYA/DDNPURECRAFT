import { createContext, useEffect, useState } from "react";
import { menu_list, product_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
   
    const [cartItems, setCartItems] = useState({});

    const addToCart=(itemId) =>{
       if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    }, [cartItems] )

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product.food_id === Number(item));
            totalAmount += itemInfo.food_price * cartItems[item];
          }
        }
        return totalAmount;
    }


    const contextValue = {
       product_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount

    }

    return(
        <StoreContext.Provider value={(contextValue)}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider