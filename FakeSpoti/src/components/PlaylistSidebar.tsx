import styles from '../scss/PlaylistSidebar.module.scss';
import Playlist from './Playlist';
import { PlaylistData } from './App'; 

interface PlaylistSidebarProps {
    playlists: PlaylistData[];
    onCreateClick: () => void;
    onSelectPlaylist: (id: string | null) => void;
    selectedId: string | null;
}

function PlaylistSidebar({ playlists, onCreateClick, onSelectPlaylist, selectedId }: PlaylistSidebarProps ) {
    const addButtonSrc = "/assets/img/plusbutton.svg";

    return (
        <div className={styles.container}>
            <h3 className={`${selectedId === null ? styles.active : ''}`} onClick={() => onSelectPlaylist(null)}>All songs</h3>
            {playlists.map((playlist) => (
                <Playlist
                    key={playlist.id} 
                    name={playlist.name}
                    onPlaylistAdd={() => onSelectPlaylist(playlist.id)}
                    isActive={playlist.id === selectedId}
                    />
            ))}
            <Playlist imageSrc={addButtonSrc} onPlaylistAdd={onCreateClick} />
        </div>
    );
}

export default PlaylistSidebar;