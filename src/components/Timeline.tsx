import { ReactElement } from "react";
import "./Timeline.css"

export function Timeline(): ReactElement {
    return (
        <section className="timeline">
            <p className="runtime">0:45</p>
            <div className="timelineBar"><span className="highlight"></span></div>
            <p className="runtimeTotal">4:22</p>
        </section>
    )
}