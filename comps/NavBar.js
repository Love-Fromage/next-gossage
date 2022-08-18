import React from "react";
import Link from 'next/link';
import About from "../pages/About";

function NavBar(props){
    return(
        <nav>
            <ul>
            

          

                <Link href="/About"><li><a href="#">about </a> </li></Link>
            
            
                <li>Accueil</li>
                <li>blog post</li>
            </ul>
        </nav>
    )
}
export default NavBar;