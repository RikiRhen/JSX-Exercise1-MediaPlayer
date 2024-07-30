import { ReactElement } from "react";
import "./MediaPlayer.css";
import { MediaCard } from "./MediaCard";
import { MediaControls} from "./MediaControls"
import { Timeline } from "./Timeline";

export function MediaPlayer(): ReactElement {
    return (
        <section className="mediaPlayer">
            <MediaCard/>
            <Timeline/>
            <MediaControls/>
        </section>
    )
}