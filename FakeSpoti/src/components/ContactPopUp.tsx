import styles from '../scss/ContactPopUp.module.scss';

interface ContactPopUpProps {
    onClose: () => void;
    title: string;
    content: string;
    email?: string;
}

function ContactPopUp({onClose, title, content, email } : ContactPopUpProps) {    
    return (
        <div className={styles.popUp} onClick={onClose}>
            <div className={styles.header} onClick={(e) => e.stopPropagation()}>
                <h1>{title}</h1>
                <button className={styles.closeBtn} onClick={onClose}>X</button>
            </div>
            <div className={styles.body} onClick={(e) => e.stopPropagation()}>
                <h3>{content}</h3>
                <h2>{email}</h2>
            </div>
        </div>
    );
}

export default ContactPopUp;