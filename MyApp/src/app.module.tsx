import React from "react";
import { AppNavigation } from "./app.navigation";
import { CartProvider } from "./context/CartContext";

function App(){
    return(
      <CartProvider>
        <AppNavigation/>
      </CartProvider>
    )
}
export {App}