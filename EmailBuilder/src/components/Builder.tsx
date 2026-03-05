import styles from '../scss/Builder.module.scss';
import InputField from './InputField';
import PhrasePicker from './PhrasePicker';
import TextArea from './TextArea';
import data from '../assets/data.json';

function Builder() {
    return (
        <div className={styles.container}>
            <InputField caption="To:" placeholder="E-mail recipent" />
            <InputField caption="Subject:" placeholder="E-mail subject" />
            <PhrasePicker phrases={data.salutations} color="phraseRed" />
            <PhrasePicker phrases={data.openings} color="phrasePurple" />
        </div>
    )
}

export default Builder;