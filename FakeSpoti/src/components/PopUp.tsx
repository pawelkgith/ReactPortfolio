import styles from '../scss/PopUp.module.scss';
import { ReactNode } from 'react';

interface PopUpProps {
    onClose: () => void;
    title: string;
    children: ReactNode;
    colorMode: string;
}

function PopUp({onClose, title, children, colorMode } : PopUpProps) {    
    return (
        <div className={`${styles.popUp} ${colorMode === "blue" ? styles.popUpBlueMode : ''}`} onClick={onClose}>
            <div className={styles.header} onClick={(e) => e.stopPropagation()}>
                <h1>{title}</h1>
                <button className={styles.closeBtn} onClick={onClose}>X</button>
            </div>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default PopUp;