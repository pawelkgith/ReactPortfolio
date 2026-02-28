import styles from '../scss/Playlist.module.scss';

interface PlaylistProps {
    onPlaylistAdd?: () => void;
    onDelete?: () => void;
    name?: string;
    imageSrc?:string;
    isActive?:boolean;
    songsCount?:number
}

function Playlist( { onPlaylistAdd, onDelete, name, imageSrc, isActive, songsCount } : PlaylistProps) {
    const binIconSrc = "/assets/img/bin.svg";

    const handleDeletePlaylist = (e: React.MouseEvent) => {
        e.stopPropagation();
        if(onDelete) onDelete();
    }

    return (
        <div className={`${styles.playlist} ${styles.playlistBlueMode}`} onClick={onPlaylistAdd}>
            {imageSrc ? (
                <img src={imageSrc} alt="Add Button" className={styles.addButton} />
            ) : (
                <>
                    <h3 className={`${styles.playlistTitle} ${isActive ? styles.active : ''}`}>{`${name} (${songsCount})`}</h3>
                    <img src={binIconSrc} alt="Bin icon" className={styles.binIcon} onClick={handleDeletePlaylist} />
                </>
            )}
        </div>
    );
}

export default Playlist;