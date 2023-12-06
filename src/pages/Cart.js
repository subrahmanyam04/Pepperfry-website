import React from "react";
import Cartbanner from "../components/Cartbanner";
import Cartslider from "../components/Cartslider";
import Cartfooter from "../components/Cartfooter";
import Cartmobileslider from "../components/Cartmobileslider";

const Cart = () => {
    return (
        <>
          <Cartbanner/>         {/*Your Cart is Empty banner component in cart page */}
          <Cartslider/>         {/*Recently Viewed slider component in the cart page */}
          <Cartmobileslider/>   {/*Recently Viewed slider component for the mobile screens in the cart page */}
          <Cartfooter/>         {/*footer component in the cart page */}

          </>

    )
}

export default Cart;