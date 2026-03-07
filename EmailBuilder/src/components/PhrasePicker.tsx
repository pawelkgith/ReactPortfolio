import styles from '../scss/PhrasePicker.module.scss';
import Button from './Button';
import { useState } from 'react';

interface PhrasePickerProps {
    phrases: string[];
    color: string;
    onPhraseSelect: (value: string) => void;
}

function PhrasePicker( {phrases, color, onPhraseSelect} : PhrasePickerProps) {
    const [isPhrasePicked, setIsPhrasePicked] = useState(false);
    const [pickedText, setPickedText] = useState('');

    const handlePhrasePick = (value: string) => {
        setPickedText(value);
        setIsPhrasePicked(true);
        onPhraseSelect(value);
    }

    return (
        <div className={styles.container}>
            {!isPhrasePicked ? (
                <div className={styles.phraseContainer}>
                    {phrases.map(el => (
                        <Button usage="phrasePicker" key={el} value={el} color={color} onButtonClick={handlePhrasePick} />
                    ))}
                </div>
                ) :
                (
                    <div className={styles.pickedPhrase} onClick={() => setIsPhrasePicked(false)}>
                        <h1>{pickedText}</h1>
                    </div>
                )}

        </div>
    );
}

export default PhrasePicker;