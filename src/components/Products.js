import React from "react"
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"
function Products(){
  return(
<div className="Products-Container">

  <div className="product-card">
    <img src={p1} alt="Perfume 1"></img>
    <h3>Frose Premium</h3>
    <p>A luxurious blend of fresh floral notes designed for casual elegance.</p>
    <span className="volume">100ml</span>
  </div>

  <div className="product-card">
   <img src={p2} alt="Perfume 2"></img>
    <h3>Midnight Oud</h3>
        <p>Deep woodsy aromas combined with subtle spice hints for evening wear.</p>
        <span className="volume">100ml</span>
  </div>
  <div className="product-card">
   <img src={p3} alt="Perfume 3"></img>
    <h3>Ocean Breeze</h3>
        <p>Crisp, bright citrus notes that capture the essence of a coastal morning.</p>
        <span className="volume">100ml</span>
  </div>

</div>

  )}

  export default Products