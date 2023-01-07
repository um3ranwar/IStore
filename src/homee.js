import { NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
function Homee(){

return(
  <div className="Iphones" >
  <div class="row">
    <div class=" col-lg-6 col-md-6 elements zoom">
    <div class="container11">
    <img src="/Iphone.png" alt="Snow"/>
    <NavLink as={Link} to="/Apple"><button class="btn11">APPLE</button></NavLink>
  </div>
    </div>
    <div class=" col-lg-6 col-md-6 elements zoom">
    <div class="container11">
    <img class="heightt" src="/oppo.jpg" alt="Snow"/>
  <NavLink as={Link} to="/Oppo">  <button class="btn11">OPPO</button></NavLink>
  </div>
    </div>
    <div class=" col-lg-6 col-md-6 elements zoom">
    <div class="container11">
    <img class="heightt" src="/Oneplus.jpg" alt="Snow"/>
  <NavLink as={Link} to="/Oneplus">  <button class="btn11">ONEPLUS</button></NavLink>
  </div>
    </div>
    <div class=" col-lg-6 col-md-6 elements zoom">
    <div class="container11">
    <img src="/vivo.jpg" alt="Snow"/>
  <NavLink as={Link} to="/Vivo">  <button class="btn11">VIVO</button></NavLink>
  </div>
    </div>
    <div class=" col-lg-6 col-md-6 elements zoom">
    <div class="container11">
    <img  class="heightt" src="/Sony.jpg" alt="Snow"/>
  <NavLink as={Link} to="/Sony">  <button class="btn11">SONY</button></NavLink>
  </div>
    </div>
    <div class=" col-lg-6 col-md-6 elements zoom">
    <div class="container11">
    <img class="heightt"  src="/Nokia.webp" alt="Snow"/>
    <NavLink as={Link} to="/Nokia"><button class="btn11">NOKIA</button></NavLink>
  </div>
    </div>
  </div>
  </div>
);
};
export default Homee;
