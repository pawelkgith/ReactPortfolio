import styles from '../scss/SocialsSidebar.module.scss';
import VolumeSlider from './VolumeSlider';

interface SocialSidebarProps {
    onVolumeChange: (v: number) => void;
}

function SocialsSidebar({onVolumeChange} : SocialSidebarProps) {
    return (
        <div className={styles.container}>
            <VolumeSlider onSlide={onVolumeChange} />
        </div>
    );
}

export default SocialsSidebar;