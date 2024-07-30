import { ReactElement } from "react";

import "./MediaItem.css"

export function MediaItem(media:{image:string, title:string, artist:string}): ReactElement{
    return (
        <div className="mediaItem">
            <span className="thumbnailImage">
                <img className="thumbnail" src={media.image} alt="" />
            </span>
            <span className="mediaInfo">
                <p className="title">{media.title}</p>
                <p className="artist">{media.artist}</p>
            </span>
            <span className="material-symbols-outlined">
                play_circle
            </span>
        </div>
    )
}