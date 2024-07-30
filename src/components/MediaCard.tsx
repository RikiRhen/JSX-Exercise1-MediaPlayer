import { ReactElement } from "react";
import { song3 } from "../data";
import "./MediaCard.css";

export function MediaCard(): ReactElement {
    return (
        <section className="mediaCard">
            <div className="mediaImageDiv">
                <img className="mediaImage" src={song3.image} alt="Blä" />
            </div>
            <div className="infoCard">
                <span className="material-symbols-outlined">
                    add
                </span>
                <span className="mediaInfo">
                    <p className="title">{song3.title}</p>
                    <p className="artist">{song3.artist}</p>
                </span>
                <span className="material-symbols-outlined">
                    favorite
                </span>
            </div>
        </section>
    )
}