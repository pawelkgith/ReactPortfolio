import styles from '../scss/MainWrapper.module.scss';
import SongCard from './SongCard';
import { useState } from 'react';
import data from '../assets/SongsData.json';
import { PlaylistData } from './App';

interface MainWrapperProps {
    globalVolume:number;
    searchTerm:string;
    selectedPlaylistId: string | null;
    playlists: PlaylistData[];
    onAddClick: (id: number) => void;
    activeSongId: number | null;
    onTogglePlay: (id: number) => void;
    isAppPlaying: boolean;
    colorMode: string;
}

function MainWrapper({globalVolume, searchTerm, selectedPlaylistId, playlists, onAddClick, activeSongId, onTogglePlay, isAppPlaying, colorMode} : MainWrapperProps) {
    // const [activeSongId, setActiveSongId] = useState<number | null>(null);

    // const handleTogglePlay = (id: number) => {
    //     setActiveSongId(prevId => (prevId === id ? null: id));
    // }

    const filteredSongs = data.filter((song) => {
        const title = song.title?.toLowerCase() ?? "";
        const artist = song.artist?.toLowerCase() ?? "";
        const search = searchTerm?.toLowerCase() ?? "";
        const searchMatch = title.includes(search) || artist.includes(search);
        
        if(selectedPlaylistId === null)
            return searchMatch;

        else {
            const currentPlaylist = playlists.find((el) => el.id === selectedPlaylistId)

            const isInPlaylist = currentPlaylist?.songIds.includes(song.id);

            return searchMatch && isInPlaylist;
        }
    });

    return (
        // <div className={styles.container}>
        //     {data.map((el) => (<SongCard key={el.id} id={el.id} title={el.title} artist={el.artist} isPlaying={activeSongId === el.id} volume={globalVolume} onToggle={() => handleTogglePlay(el.id)}/>))}
        // </div>

        <div className={`${styles.container} ${colorMode === "blue" ? styles.containerBlueMode : ''}`}>
            {filteredSongs.length > 0 ? (
                filteredSongs.map((el) => (
                    <SongCard 
                        key={el.id} 
                        id={el.id} 
                        title={el.title} 
                        artist={el.artist} 
                        isPlaying={activeSongId === el.id && isAppPlaying} 
                        volume={globalVolume} 
                        onToggle={() => onTogglePlay(el.id)}
                        onAdd={onAddClick}
                        colorMode={colorMode} />
                ))
            ) :
            (
                <div className={styles.noItems}>
                    <h2>No songs found in this playlist</h2>
                </div>
            )
            }
        </div>
    );
}

export default MainWrapper;