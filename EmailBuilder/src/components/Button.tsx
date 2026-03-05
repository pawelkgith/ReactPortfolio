import styles from '../scss/Button.module.scss';

interface ButtonProps {
    usage: string;
    value: string;
    color?: string;
    onButtonClick: (text: string) => void;
}

function Button( {usage, value, color, onButtonClick} : ButtonProps) {
    return (
        <input type="button" className={`${styles[usage]} ${color ? styles[color] : ''}`} value={value} onClick={() => onButtonClick(value)}/>
    )
}

export default Button;