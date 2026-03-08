import styles from '../scss/TextArea.module.scss'

interface TextAreaProps {
    onInputChange: (text: string) => void;
    value: string;
}

function TextArea( {onInputChange, value} : TextAreaProps) {
    return (
        <div className={styles.container}>
            <label htmlFor="bodyArea">Body: </label>
            <textarea id="bodyArea" className={styles.bodyArea} placeholder="Your e-mail body..." value={value} onChange={(e) => onInputChange(e.target.value)}></textarea>
        </div>
    )
}

export default TextArea;