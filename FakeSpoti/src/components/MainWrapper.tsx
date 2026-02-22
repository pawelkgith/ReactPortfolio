import styles from '../scss/MainWrapper.module.scss';
import SongCard from './SongCard';
import { useState } from 'react';

interface MainWrapperProps {
    globalVolume: number;
}

const songs = [
    {id: 1, title: "Numb", artist: "Linkin Park"},
    {id: 2, title: "Blinding Lights", artist: "The Weeknd"},
    {id: 3, title: "Demons", artist: "Imagine Dragons"}, 
    {id: 4, title: "Get Lucky", artist: "Daft Punk"},
    {id: 5, title: "Pumped Up Kicks", artist: "Torches"},
    {id: 6, title: "Titanium", artist: "David Guetta"},
    {id: 7, title: "Lush Life", artist: "Zara Larsson"},
    {id: 8, title: "Iris", artist: "The Goo Goo Dolls"},
    {id: 9, title: "I Wanna Be Yours", artist: "Arctic Monkeys"},
    {id: 10, title: "Meet Me Halfway", artist: "Black Eyed Peas"},
    {id: 11, title: "Safe and Sound", artist: "Capital Cities"},
    {id: 12, title: "Wavin' Flag", artist: "K'NAAN"}
];

function MainWrapper({globalVolume} : MainWrapperProps) {
    const [activeSongId, setActiveSongId] = useState<number | null>(null);

    const handleTogglePlay = (id: number) => {
        setActiveSongId(prevId => (prevId === id ? null: id));
    }

    return (
        <div className={styles.container}>
            {songs.map((el) => (<SongCard key={el.id} id={el.id} title={el.title} artist={el.artist} isPlaying={activeSongId === el.id} volume={globalVolume} onToggle={() => handleTogglePlay(el.id)}/>))}
        </div>
    );
}

export default MainWrapper;