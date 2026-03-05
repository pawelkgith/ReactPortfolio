import styles from '../scss/InputField.module.scss';

interface InputFieldProps {
    caption?: string;
    placeholder: string;
}

function InputField( {caption, placeholder} : InputFieldProps) {
    return (
        <div className={styles.inputField}>
            <label htmlFor="inputArea">{caption}</label>
            <input type="text" id="inputArea" className={styles.inputArea} placeholder={placeholder} />
        </div>
    );
}

export default InputField;