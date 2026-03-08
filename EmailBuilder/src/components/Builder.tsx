import styles from '../scss/Builder.module.scss';
import InputField from './InputField';
import PhrasePicker from './PhrasePicker';
import TextArea from './TextArea';
import data from '../assets/data.json';
import { useState } from 'react';

interface ButtonProps {
    setText: (value: string) => void;
}

function Builder({ setText } : ButtonProps) {
    const [emailData, setEmailData] = useState({'to': '', 'subject': '', 'salutation': '', 'recipent': '', 'opening': '', 'body': [''], 'closing': '', 'signOff': '', 'signature': ''});

    const handleInputChange = (field: string, value: string) => {
        setEmailData(prev => {
            const newState = { ...prev, [field]:value}
            const newValue = `${newState.to}\n${newState.subject}\n${newState.salutation} ${newState.recipent},\n${newState.opening} ${newState.body} ${newState.closing}.\n${newState.signOff}\n${newState.signature}`;
            setText(newValue);
            return newState;
        })
    }

    const addParagraph = () => {
        setEmailData(prev => ({
            ...prev,
            body: [...prev.body, '']
        }));
    }

    const handleParagraphChange = (index: number, value: string) => {
        setEmailData(prev => {
            const newBody = [...prev.body];
            newBody[index] = value;
            return {...prev, body: newBody}
        });
    }

    return (
        <div className={styles.container}>
            <InputField caption="To:" placeholder="E-mail recipent" onInputChange={v => handleInputChange('to', v)} />
            {/*<InputField caption="To:" placeholder="E-mail recipent" onInputChange={(v) => setEmailData(prev => ({...prev, to: v}))} />*/}
            <InputField caption="Subject:" placeholder="E-mail subject" onInputChange={v => handleInputChange('subject', v)} />
            <PhrasePicker phrases={data.salutations} color="phraseRed" onPhraseSelect={v => handleInputChange('salutation', v)} />
            <InputField placeholder="Recipent" onInputChange={v => handleInputChange('recipent', v)} />
            <PhrasePicker phrases={data.openings} color="phrasePurple" onPhraseSelect={v => handleInputChange('opening', v)} />
            {/* <TextArea onInputChange={(v) => handleInputChange('body', v)} /> */}
            {emailData.body.map((paragraphText, index) => (
                <TextArea key={index} value={paragraphText} onInputChange={(v) => handleParagraphChange(index, v)} />
            ))}
            <button className={styles.addParagraphButton} onClick={addParagraph}>+</button>
            <PhrasePicker phrases={data.closings} color="phrasePink" onPhraseSelect={v => handleInputChange('closing', v)} />
            <PhrasePicker phrases={data.signOffs} color="phraseBlue" onPhraseSelect={v => handleInputChange('signOff', v)} />
            <InputField caption="Signature:" placeholder="Your name" onInputChange={v => handleInputChange('signature', v)} />
        </div>
    )
}

export default Builder;