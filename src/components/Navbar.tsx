import { ReactElement } from "react";

import "./Navbar.css"


export function Navbar(): ReactElement{
    return (
        <nav className="navbar">
            <span className="material-symbols-outlined">
                arrow_back
            </span>
            <h1>Playlist - Name</h1>
            <span className="material-symbols-outlined">
                more_vert
            </span>
        </nav>
    )
}