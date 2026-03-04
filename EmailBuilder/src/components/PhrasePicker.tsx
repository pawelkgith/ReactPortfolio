import styles from '../scss/PhrasePicker.module.scss';
import data from '../assets/data.json';

function PhrasePicker() {
    return (
        <>
            {
                data.openings.map((el)=>
                    <input type="button" value={el} />
                )
            }
        </>
    );
}

export default PhrasePicker;