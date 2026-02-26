import styles from '../scss/SocialsSidebar.module.scss';
import VolumeSlider from './VolumeSlider';

interface SocialSidebarProps {
    onVolumeChange: (v: number) => void;
    volume: number;
}

function SocialsSidebar({ onVolumeChange, volume } : SocialSidebarProps) {
    return (
        <div className={styles.container}>
            <VolumeSlider onSlide={onVolumeChange} volume={volume} />
        </div>
    );
}

export default SocialsSidebar;