import styles from '../scss/Button.module.scss';

interface ButtonProps {
    usage: string;
    value: string;
    color?: string;
    onPhrasePick: (text: string) => void;
}

function Button( {usage, value, color, onPhrasePick} : ButtonProps) {
    return (
        <input type="button" className={`${usage === "phrasePicker" ? `${styles.phrasePicker}` : `${styles.controlButton}`} ${color ? styles[color] : ''}`} color={styles.color} value={value} onClick={() => onPhrasePick(value)}/>
    )
}

export default Button;