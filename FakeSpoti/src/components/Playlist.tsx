import styles from '../scss/Playlist.module.scss';

interface PlaylistProps {
    onPlaylistAdd?: () => void;
    name?: string;
    imageSrc?:string;
    isActive?:boolean;
}

function Playlist( { onPlaylistAdd, name, imageSrc, isActive } : PlaylistProps) {
    return (
        <div className={styles.playlist} onClick={onPlaylistAdd}>
            {imageSrc ? (
                <img src={imageSrc} alt="Add Button" />
            ) : (
                <h3 className={`${styles.playlist} ${isActive ? styles.active : ''}`}>{name}</h3>
            )}
        </div>
    );
}

export default Playlist;