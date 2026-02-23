import styles from '../scss/SongCard.module.scss';
import { useState, useRef, useEffect } from 'react';

interface SongCardProps {
    id: number;
    title:string;
    artist:string;
    isPlaying: boolean;
    volume: number;
    onToggle: () => void;
}

function SongCard({title, artist, isPlaying, volume, onToggle} : SongCardProps) {
    const bannerSrc = `/assets/img/${title.split(' ').join('').toLowerCase()}.jpg`;
    //const [isPlaying, setIsPlaying] = useState(false);

    const playButton = '/assets/img/playbutton.svg';
    const pauseButton = '/assets/img/pausebutton.svg';
    const addButton = '/assets/img/plusButton.svg';

    const audioRef = useRef<HTMLAudioElement>(null);
    const audioSrc = `assets/music/${title.split(' ').join('').toLowerCase()}.mp3`;

    ///const handlePlayClick = () => {
        //setIsPlaying(!isPlaying);
    //}

    useEffect(() => {
        if(audioRef.current) {
            if(isPlaying)
                audioRef.current.play();
            else
                audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if(audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    return (
        <div className={styles.card}>
            <audio ref={audioRef} src={audioSrc} />

            <div className={styles.songBanner}>
                <img src={bannerSrc} className={styles.song} />
            </div>
            <h1>{title}</h1>
            <h2>{artist}</h2>
            <div className={styles.controlPanel}>
                <button className={styles.controlButton} onClick={onToggle}><img src={isPlaying ? pauseButton : playButton} alt="Play button" /></button>
                <button className={styles.controlButton}><img src="/assets/img/plusbutton.svg" /></button>
            </div>
        </div>
    );
}

export default SongCard;