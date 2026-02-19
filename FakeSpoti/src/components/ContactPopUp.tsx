import styles from '../scss/ContactPopUp.module.scss';

interface ContactPopUpProps {
    onClose: () => void;
}

function ContactPopUp({onClose} : ContactPopUpProps) {
    const email = "pawelkielbasa500@gmail.com";
    
    return (
        <div className={styles.popUp} onClick={onClose}>
            <div className={styles.header} onClick={(e) => e.stopPropagation()}>
                <h1>Contact me</h1>
                <button className={styles.closeBtn} onClick={onClose}>X</button>
            </div>
            <div className={styles.body} onClick={(e) => e.stopPropagation()}>
                <h3>In case you were intrested in my projects, you cant contact me via e-mail: </h3>
                <h2>{email}</h2>
            </div>
        </div>
    );
}

export default ContactPopUp;