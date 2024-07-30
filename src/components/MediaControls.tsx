import {ReactElement} from "react";
import "./MediaControls.css";

export function MediaControls(): ReactElement{
    return(
        <section className="mediaControls">
            <span className="material-symbols-outlined repeat">
                repeat
            </span>
            <div className="mainButtons">
                <span className="material-symbols-outlined rewind">
                    fast_rewind
                </span>
                <span className="material-symbols-outlined play">
                    play_circle
                </span>
                <span className="material-symbols-outlined next">
                    fast_forward
                </span>
            </div>
            <span className="material-symbols-outlined shuffle">
                shuffle
            </span>
        </section>
    )
}