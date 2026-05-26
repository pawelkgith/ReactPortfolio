import styles from '../scss/SongCard.module.scss';
import { useState, useRef, useEffect } from 'react';

interface SongCardProps {
    id: number;
    title:string;
    artist:string;
    isPlaying: boolean;
    volume: number;
    onToggle: () => void;
    onAdd: (id: number) => void;
    colorMode: string;
}

function SongCard({ id, title, artist, isPlaying, volume, onToggle, onAdd, colorMode } : SongCardProps) {
    const bannerSrc = `assets/img/${title.split(' ').join('').toLowerCase()}.jpg`;
    const playButton = 'assets/img/playbutton.svg';
    const pauseButton = 'assets/img/pausebutton.svg';
    const addButton = 'assets/img/plusbutton.svg';

    // const audioRef = useRef<HTMLAudioElement>(null);
    // const audioSrc = `assets/music/${title.split(' ').join('').toLowerCase()}.mp3`;

    // const [currentTime, setCurrentTime] = useState(0);
    // const [duration, setDuration] = useState(0);

    // const formatTime = (time: number) => {
    //     const minutes = Math.floor(time/60);
    //     const seconds = Math.floor(time%60);

    //     return `${minutes}:${seconds > 10 ? '0' : ''}${seconds}`;
    // }

    // useEffect(() => {
    //     if(audioRef.current) {
    //         if(isPlaying)
    //             audioRef.current.play();
    //         else
    //             audioRef.current.pause();
    //     }
    // }, [isPlaying]);

    // useEffect(() => {
    //     if(audioRef.current) {
    //         audioRef.current.volume = volume;
    //     }
    // }, [volume]);

    return (
        <div className={`${styles.card} ${colorMode === "blue" ? styles.cardBlueMode : ''}`}>
            {/*<audio ref={audioRef} src={audioSrc} />*/}

            <div className={styles.songBanner}>
                <img src={bannerSrc} className={styles.song} />
            </div>
            <h1>{title}</h1>
            <h2>{artist}</h2>
            <div className={styles.controlPanel}>
                <button className={styles.controlButton} onClick={onToggle}><img src={isPlaying ? pauseButton : playButton} className={!isPlaying ? styles.playIcon : ''} alt="Play button" /></button>
                <button className={styles.controlButton} onClick={() => onAdd(id)}><img src={addButton} alt="Add button" /></button>
            </div>
        </div>
    );
}

export default SongCard;