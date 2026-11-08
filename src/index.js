import React from "react"
import "./style.css"
import ReactDOM from "react-dom/client"

import Navbar from './components/Navbar'
import Search from "./components/Search"
import Products from "./components/Products"
import Aboutus from "./components/Aboutsus"
import Footer from "./components/Footer"

import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"
import p3 from "./images/p3.jpg"

const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<div>
<Navbar></Navbar>
<Search></Search>
<Products></Products>
<Aboutus></Aboutus>
<Footer></Footer>
</div>)