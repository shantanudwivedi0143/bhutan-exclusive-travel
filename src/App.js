import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Destination from "./components/Destination";
import PopularTours from "./components/PopularTours";
import About from "./components/About";
import Blog from "./components/Blog";
function App() {

const [navOpen,setNavOpen]=useState(false)
const [goTop,setGoTop]=useState(false)

useEffect(()=>{

const handleScroll=()=>{
setGoTop(window.scrollY>200)
}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

return (

<>
<Header />
<main>

<article>

<Hero />

<Destination />
<PopularTours />
<About />
<Blog />
<Footer />
</article>

</main>


{goTop && (

<a
href="#top"
className="go-top active"
aria-label="Go To Top"
>

<ion-icon name="chevron-up-outline"></ion-icon>

</a>

)}

</>

)

}

export default App