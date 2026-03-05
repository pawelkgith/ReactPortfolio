import styles from '../scss/TextArea.module.scss'

function TextArea() {
    return (
        <div className={styles.container}>
            <label htmlFor="bodyArea">Body: </label>
            <textarea id="bodyArea" className={styles.bodyArea} placeholder="Your e-mail body..."></textarea>
        </div>
    )
}

export default TextArea;