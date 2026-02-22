import styles from '../scss/SocialsSidebar.module.scss';
import VolumeSlider from './VolumeSlider';

interface SocialSidebarProps {
    onVolumeChange: (v: number) => void;
}

function SocialsSidebar({onVolumeChange} : SocialSidebarProps) {
    return (
        <div className={styles.container}>
            <h1>Socials</h1>
            <VolumeSlider onSlide={onVolumeChange} />
        </div>
    );
}

export default SocialsSidebar;