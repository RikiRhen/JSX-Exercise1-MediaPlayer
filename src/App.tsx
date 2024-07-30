import { Navbar } from "./components/Navbar";
import { MediaList } from "./components/MediaList";
import { MediaPlayer } from "./components/MediaPlayer";
import "./App.css";

export function App() {
  return (
    <>
    <Navbar/>
    <div className="appBody">
      <section className="listSection">
        <MediaList/>
      </section>
      <section className="playerSection">
        <MediaPlayer/>
      </section>
    </div>
    </>
  );
}
