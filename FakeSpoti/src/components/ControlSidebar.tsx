import styles from '../scss/SocialsSidebar.module.scss';
import VolumeSlider from './VolumeSlider';

interface SocialSidebarProps {
    onVolumeChange: (v: number) => void;
    volume: number;
    currentSongImg: string | null;
    currentTime: number;
    duration: number;
    onSeek: (time: number) => void;
}

function SocialsSidebar({ onVolumeChange, volume, currentSongImg, currentTime, duration, onSeek } : SocialSidebarProps) {
    const formatTime = (time: number) => {
        const minutes = Math.floor(time/60);
        const seconds = Math.floor(time%60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.nowPlaying}>
                {currentSongImg ? (
                    <>
                        <img src={currentSongImg} className={styles.playingSongImg} alt="Now playing" />
                        <div className={styles.timeInfo}> 
                            <span>{formatTime(currentTime)}</span>
                            <input type="range"  min="0" max={duration || 0} value={currentTime} onChange={(e) => onSeek(Number(e.target.value))} className={styles.progressBar} />
                            <span>{formatTime(duration)}</span>
                        </div>
                    </>
                ) : 
                (
                    <div className={styles.playingSongPlaceholder}>
                        <h3>No song playing</h3>
                    </div>
                )}
            </div>

            <VolumeSlider onSlide={onVolumeChange} volume={volume} />
        </div>
    );
}

export default SocialsSidebar;