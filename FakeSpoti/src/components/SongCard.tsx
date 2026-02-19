import styles from '../scss/SongCard.module.scss';

interface SongCardProps {
    title:string;
    artist:string;
}

function SongCard({title, artist} : SongCardProps) {
    const src = `../public/assets/img/${title.split(' ').join('').toLowerCase()}.jpg`;
    
    return (
        <div className={styles.card}>
            <img src={src} className={styles.songBanner} />
            <h1>{title}</h1>
            <h2>{artist}</h2>
        </div>
    );
}

export default SongCard;