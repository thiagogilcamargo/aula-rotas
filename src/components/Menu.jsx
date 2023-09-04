 import { link } from "react-router-dom"

export default function Menu (){
    return(
        <nav className="menu">
            <link to='/'>Home</link>
            <span> | </span>
            <link to='/produtos'>Produtos</link>
        </nav>
    )
}