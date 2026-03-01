import styles from '../scss/PlaylistSidebar.module.scss';
import Playlist from './Playlist';
import { PlaylistData } from './App'; 
import { useState } from 'react';

interface PlaylistSidebarProps {
    playlists: PlaylistData[];
    onCreateClick: () => void;
    onSelectPlaylist: (id: string | null) => void;
    onDeletePlaylist: (id: string) => void;
    selectedId: string | null;
    colorMode: string;
    setColorMode: (color: string) => void;
}

function PlaylistSidebar({ playlists, onCreateClick, onSelectPlaylist, onDeletePlaylist, selectedId, colorMode, setColorMode }: PlaylistSidebarProps ) {
    const addButtonSrc = "/assets/img/plusbutton.svg";

    const handleColorModeChange = () => {
        const nextMode = colorMode === "green" ? "blue" : "green";
        setColorMode(nextMode);
    }

    return (
        <div className={`${styles.container} ${colorMode === "blue" ? styles.containerBlueMode : ''}`}>
            <div className={styles.playlists}>
                <h3 className={`${selectedId === null ? styles.active : ''}`} onClick={() => onSelectPlaylist(null)}>All songs</h3>
                {playlists.map((playlist) => (
                    <Playlist
                        key={playlist.id} 
                        name={playlist.name}
                        songsCount={playlist.songIds.length}
                        onPlaylistAdd={() => onSelectPlaylist(playlist.id)}
                        isActive={playlist.id === selectedId}
                        onDelete={() => onDeletePlaylist(playlist.id)}
                        colorMode={colorMode}
                    />
                ))}
                <Playlist imageSrc={addButtonSrc} onPlaylistAdd={onCreateClick} />
            </div>
            <div className={styles.colorMode}>
                <label className={styles.switch}>
                    <input type="checkbox" checked={colorMode === "blue"} onChange={handleColorModeChange} />
                    <span className={styles.slider}></span>
                </label>
            </div>
        </div>
    );
}

export default PlaylistSidebar;