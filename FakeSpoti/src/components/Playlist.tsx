import styles from '../scss/Playlist.module.scss';

interface PlaylistProps {
    onPlaylistAdd?: () => void;
    name?: string;
    imageSrc?:string;
}

function Playlist( { onPlaylistAdd, name, imageSrc } : PlaylistProps) {
    return (
        <div className={styles.playlist}>
            {imageSrc ? (
                <img src={imageSrc} alt="Add Button" />
            ) : (
                <h3>{name}</h3>
            )}
        </div>
    );
}

export default Playlist;