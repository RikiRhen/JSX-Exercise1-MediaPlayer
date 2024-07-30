import { IMedia } from "./interfaces";
import img1 from "./assets/thumbnails/1.jpg";
import img2 from "./assets/thumbnails/2.jpg";
import img3 from "./assets/thumbnails/3.jpg";
import img4 from "./assets/thumbnails/4.jpg";
import img5 from "./assets/thumbnails/5.jpg";
import img6 from "./assets/thumbnails/6.jpg";
import img7 from "./assets/thumbnails/7.jpg";
import img8 from "./assets/thumbnails/8.jpg";


const song1: IMedia = {
    id: "1",
    artist: "Sabaton",
    title: "Livgardet",
    image: img1
}

const song2: IMedia = {
    id: "2",
    artist: "Bad Wolves",
    title: "Zombie",
    image: img2
}

export const song3: IMedia = {
    id: "3",
    artist: "Turmion Kätilöt",
    title: "4 käskyä",
    image: img3
}

const song4: IMedia = {
    id: "4",
    artist: "BENNETT",
    title: "Vois sur ton chemin",
    image: img4
}

const song5: IMedia = {
    id: "5",
    artist: "Paradelous",
    title: "Power Slam",
    image: img5
}

const song6: IMedia = {
    id: "6",
    artist: "Disturbed",
    title: "Sound of Silence",
    image: img6
}

const song7: IMedia = {
    id: "7",
    artist: "Akon ft. Eminem & Kriminal",
    title: "Smack that",
    image: img7
}

const song8: IMedia = {
    id: "8",
    artist: "Ummet Ozcan",
    title: "Xanadu",
    image: img8
}

export const songList: IMedia[] = [song1, song2, song3, song4, song5, song6, song7, song8];