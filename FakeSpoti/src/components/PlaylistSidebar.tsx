import styles from '../scss/PlaylistSidebar.module.scss';
import Playlist from './Playlist';

function PlaylistSidebar() {
    const addButtonSrc = "/assets/img/plusbutton.svg";

    return (
        <div className={styles.container}>
            <Playlist name="aaa" />
            <Playlist imageSrc={addButtonSrc} />
        </div>
    );
}

export default PlaylistSidebar;