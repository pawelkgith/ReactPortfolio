import { useState, useEffect } from 'react';
import styles from '../scss/VolumeSlider.module.scss';

interface VolumeSliderProps {
    volume: number;
    onSlide?: (volume: number) => void;
}

function VolumeSlider({ volume,  onSlide } : VolumeSliderProps) {
    const speakerSrc = "/assets/img/speaker.svg";
    const mutedSpeakerSrc = "/assets/img/mutedspeaker.svg";
    
    const [volumeValue, setVolumeValue] = useState(100);
    const [prevVolume, setPrevVolume] = useState<number | null>(null);

    useEffect(() => {
        setVolumeValue(volume * 100);
    }, [volume])

    const handleVolumeToggle = () => {
        if(volumeValue === 0 && prevVolume) {
            setVolumeValue(prevVolume);
            onSlide?.(prevVolume / 100);
        }

        else {
            setPrevVolume(volumeValue);
            setVolumeValue(0);
            onSlide?.(0);
        }
    }

    const handleSliderChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolumeValue(newVolume);
        onSlide?.(newVolume/100);
    }

    return (
        <div className={styles.volumeContainer}>
            <span className={styles.icon}><img src={volumeValue === 0 ? mutedSpeakerSrc : speakerSrc} onClick={handleVolumeToggle}/></span>
            <input type="range" min="0" max="100" step="1" className={styles.slider} value={Number(volumeValue)} onChange={handleSliderChange}/>
        </div> 
    );
}

export default VolumeSlider;