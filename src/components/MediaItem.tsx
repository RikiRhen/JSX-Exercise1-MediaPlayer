import { ReactElement } from "react";
import { IMedia } from "../interfaces";
import "./MediaItem.css"

interface IMediaProps {
    media: IMedia;
}

export function MediaItem({ media }: IMediaProps): ReactElement {
    return (
        <div className="mediaItem" id={`media-${media.id}`}>
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