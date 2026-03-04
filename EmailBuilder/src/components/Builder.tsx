import styles from '../scss/Builder.module.scss';
import Button from './Button';
import InputField from './InputField';
import PhrasePicker from './PhrasePicker';
import TextArea from './TextArea';

function Builder() {
    return (
        <div className={styles.container}>
            <InputField caption="To:" placeholder="E-mail recipent" />
            <InputField caption="Subject:" placeholder="E-mail subject" />
            <PhrasePicker />
        </div>
    )
}

export default Builder;