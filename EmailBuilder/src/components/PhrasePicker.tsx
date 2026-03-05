import styles from '../scss/PhrasePicker.module.scss';
import data from '../assets/data.json';
import Button from './Button';
import { useState } from 'react';

interface PhrasePickerProps {
    phrases: string[];
    color: string;
}

function PhrasePicker( {phrases, color} : PhrasePickerProps) {
    const [isPhrasePicked, setIsPhrasePicked] = useState(false);
    const [pickedText, setPickedText] = useState('');

    const handlePhrasePick = (value: string) => {
        setPickedText(value);
        setIsPhrasePicked(true);
    }

    return (
        <div className={styles.container}>
            {!isPhrasePicked ? (
                <div className={styles.phraseContainer}>
                    {phrases.map(el => (
                        <Button usage="phrasePicker" key={el} value={el} color={color} onPhrasePick={handlePhrasePick}/>
                    ))}
                </div>
                ) :
                (
                    <div className={styles.pickedPhrase}>
                        <h1 onClick={() => setIsPhrasePicked(false)}>{pickedText}</h1>
                    </div>
                )}

        </div>
    );
}

export default PhrasePicker;