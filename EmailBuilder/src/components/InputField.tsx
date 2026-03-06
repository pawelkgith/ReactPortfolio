import { useState } from 'react';
import styles from '../scss/InputField.module.scss';

interface InputFieldProps {
    caption?: string;
    placeholder: string;
    onInputChange: (text: string) => void;
}

function InputField( {caption, placeholder, onInputChange} : InputFieldProps) {
    return (
        <div className={styles.inputField}>
            <label htmlFor="inputArea">{caption}</label>
            <input type="text" id="inputArea" className={styles.inputArea} placeholder={placeholder} onChange={(e) => onInputChange(e.target.value)}/>
        </div>
    );
}

export default InputField;