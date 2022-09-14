import './App.css';
import Tube from './Images/Group.png';
import Vector from './Images/Vector.png';
// import Navbar from './component/navbar'

import Network from "./Images/network.png";
import Wifi from "./Images/wifi.png";
import Battery from "./Images/battery.jpg";
import Bell from "./Images/Shape.png";
import Menu from "./Images/menu.png";
import Cart from "./Images/cart.png";

import Mask from "./Images/Mask.png";
import Karolina from "./Images/karolina.png";
import Pic1 from "./Images/pic1.png";
import Pic2 from "./Images/pic2.png";
import Pic3 from "./Images/pic3.png";
import Pic4 from "./Images/pic4.png";
import Calender from "./Images/calender.png";
import Doctor from "./Images/doctor.png";
import Pms from "./Images/pms.png";

import Facebook from "./Images/facebook.png";
import Next from "./Images/next.png";



function App() {
  return (
    <>
    
    <div className='all'>
    <div className='navbar'>

         
      
      <div className="navbar1">
      <div>
        9:41
      </div>
      <div>
        <img src={Network} className='n2' alt="" />
        <img src={Wifi} className='n2' alt="" />
        <img src={Battery} alt="" />
      </div> 
      </div>  
      <div className='navbar2'>
        <div><img src={Menu} alt="" /></div>
        
        <div><img src={Cart} className='n1' alt="" />
        <img src={Bell} alt="" /></div>
      </div>
      
      
      
    </div>
    
    
          
        
        
        <div className='third'>
              <p className='diana'>About Diana</p>
              <p className='plat'> A Platform that looks out for you</p>
            
            <p className='empowers'>Diana empowers you to understand how your body works so you can look and feel your best.</p>
            <hr className="lines" />
            <p className='philosophy'> Our Philosophy</p>
            <p className="sustain">Sustainable wellness is a big picture, inside out approach</p>
            <p className="mission">Diana is on a mission to create thoughtful, science backed solutions f
            or women who want to make informed desicions about their helath and wellness. <br /> <br /> That's why we have created an integrated ecosystem of:</p>
            <img src={Tube} alt="" />
            <div className="ecosystem">
              <p >Consiously formulated products that delivers feel-good results fast</p>
              <img src={Vector} alt="" />
              <p>In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</p>
              <img src={Mask} alt="" />
              <p>In-app consultation portals that connect you with compassionate wellness experts</p>
            </div>
            <p className='nerdy'>Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.</p>
        </div>
        <div className="fourth">
            <p className="different">What makes us different?</p>
            <p className='self'>Reimagining and rewiring self-care</p>
            <p className="care">You care about conscious consumption, and so do we. <br /> <br /> When it comes to your health, “good enough” is not good enough. <br />
             We’re here to flip the script on that narrative because you deserve the best <br />
             <br /> We collaborate with researchers and doctors to <br />
             <ul><li>Help you get granular about your health and self-care with personalized insights, and</li> <br />
             <li>Equip you with simple, sustainable products that get the job done</li></ul> 
             No to-the-moon-and-back claims in this neck of the woods. <br /> <br /> We’re just solving real problems for real people here.</p>
        </div>
        <div className="fifth">
            <p className="liberate">Liberate your everyday <br /> wellness</p>
            <p className="shop">Shop our selfcare <br /> products</p>
            <p className="gentle">Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and 
            get results fast. And, we always list our ingredients - so what you see is what you get.</p>
            <div className="update">Update your self-care</div>
            <div className="nastie">#No Nasties,we promise!</div>
            <img src={Karolina} alt="" className='karoline'/>

        </div>
        <div className="sixth">
            <p className="track">Track your Mood</p>
            <p className="days">All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day.</p>
            <div className="mood">Track your mood on the app</div>
            <img src={Pic1} alt="" className="pic1" />
            <img src={Pic2} alt="" className="pic2" />
            <img src={Pic3} alt="" className="pic3" />
            <img src={Pic4} alt="" className="pic4" />
        </div>
        <div className="seventh">
          <p className="period">Track your period</p>
          <p className="stay">Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.</p>
          <div className="app">Track your period on the app</div>
          <img src={Calender} alt="" className='calender'/>
        </div>
        <div className='eight'>
          <p className="consult">Consult with wellness experts</p>
          <p className="health">Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.</p>
          <div className="consult">Get a consultation</div>
          <img src={Doctor} alt="" className="doc" />
        </div>
        <div className="nine">
          <p className="get">Get your personalized period box</p>
          <img src={Pms} alt="" className="pms" />
          <p className="tailor">Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app.</p>
          <div className="box">Create your box on the app</div>
        </div>
        <div className="ten">
          <p className="with">With Diana, you’re in control of your health, your every day, and your story.</p>
        </div>
        <div className="eleven">
          {/* <img src={Facebook} alt="" className="fb" /> */}
          {/* <div className="product">Products </div>
           */}
           <p className="product">Products</p>
           <p className="product">Our Science</p>
           <p className="product">Vision & Mission</p>
           <p className="product">About us</p>
           <hr className="lined" />
           <p className="subscribe">Subscribe to our newsletter</p>
          
           <div className="parent">
           <div className="child mail">Enter your Email...</div>
           <div className="child activate">Activate</div>
           </div>
           
        </div>
    </div>
    </>
  );
}

export default App;
