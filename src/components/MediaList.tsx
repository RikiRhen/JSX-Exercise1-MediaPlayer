import { ReactElement } from "react";
import { MediaItem } from "./MediaItem";
import { songList } from "../data";
import "./MediaList.css";


export function MediaList(): ReactElement {
    return (
        <ul className="mediaList">
            {songList.map((media) => (
                <MediaItem key={media.id} media={media} />
            ))}
        </ul>
    )
}