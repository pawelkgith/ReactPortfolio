import styles from '../scss/Builder.module.scss';
import InputField from './InputField';
import PhrasePicker from './PhrasePicker';
import TextArea from './TextArea';
import data from '../assets/data.json';
import { useState } from 'react';

interface ButtonProps {
    //setText: () => void;
}

function Builder({  } : ButtonProps) {
    const [emailData, setEmailData] = useState({'to': '', 'subject': '', 'body': ''});

    return (
        <div className={styles.container}>
            <InputField caption="To:" placeholder="E-mail recipent" onInputChange={(v) => setEmailData(prev => ({...prev, to: v}))} />
            <InputField caption="Subject:" placeholder="E-mail subject" onInputChange={(v) => setEmailData(prev => ({...prev, to: v}))} />
            <PhrasePicker phrases={data.salutations} color="phraseRed" />
            <InputField placeholder="Recipent" onInputChange={(v) => setEmailData(prev => ({...prev, to: v}))} />
            <PhrasePicker phrases={data.openings} color="phrasePurple" />
            <TextArea />
            <PhrasePicker phrases={data.closings} color="phrasePink" />
            <PhrasePicker phrases={data.signOffs} color="phraseBlue" />
            <InputField caption="Signature:" placeholder="Your name" onInputChange={(v) => setEmailData(prev => ({...prev, to: v}))} />
            <h1>{emailData.to}</h1>
        </div>
    )
}

export default Builder;