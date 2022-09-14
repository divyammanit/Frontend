import React from 'react'
import App from '../App'
import Network from "./Images/network.png";
import Wifi from "./Images/wifi.png";
import Battery from "./Images/battery.jpg";
import Bell from "./Images/Shape.png";
import Menu from "./Images/menu.png";
import Cart from "./Images/cart.png";

export const navbar = () => {
  return (
    <>
    <div className='navbar'>

          
<div>
  9:41
</div>
<div>
<img src={Network} alt="" />
  <img src={Wifi} alt="" />
  <img src={Battery} alt="" />
</div>   


<div className="second">
<img src={Menu} alt="" />
<img src={Cart} alt="" />
<img src={Bell} alt="" />
</div>

</div>
    </>
  )
}
export default App;