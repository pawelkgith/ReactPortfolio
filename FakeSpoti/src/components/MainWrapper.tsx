import styles from '../scss/MainWrapper.module.scss';
import SongCard from './SongCard';
import { useState } from 'react';
import data from '../assets/SongsData.json';

interface MainWrapperProps {
    globalVolume:number;
    searchTerm:string;
}

function MainWrapper({globalVolume, searchTerm} : MainWrapperProps) {
    const [activeSongId, setActiveSongId] = useState<number | null>(null);

    const handleTogglePlay = (id: number) => {
        setActiveSongId(prevId => (prevId === id ? null: id));
    }

    const filteredSongs = data.filter((song) => {
        const title = song.title?.toLowerCase() ?? "";
        const artist = song.artist?.toLowerCase() ?? "";
        const search = searchTerm?.toLowerCase() ?? "";

        return title.includes(search) || artist.includes(search);
    });

    return (
        // <div className={styles.container}>
        //     {data.map((el) => (<SongCard key={el.id} id={el.id} title={el.title} artist={el.artist} isPlaying={activeSongId === el.id} volume={globalVolume} onToggle={() => handleTogglePlay(el.id)}/>))}
        // </div>

        <div className={styles.container}>
            {filteredSongs.map((el) => (
                <SongCard key={el.id} id={el.id} title={el.title} artist={el.artist} isPlaying={activeSongId === el.id} volume={globalVolume} onToggle={() => handleTogglePlay(el.id)} />
            ))}
        </div>
    );
}

export default MainWrapper;