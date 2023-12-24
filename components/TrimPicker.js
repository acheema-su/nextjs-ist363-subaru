import styles from './trimpicker.module.scss';
import Heading from './Heading';
import Label from './Label';
import Select from './Select';
import FormGroup from './FormGroup';
const TrimPicker = () => {
    return <section className={styles.trimpicker}>
        <div className={styles.trimpicker__text}>
            <Heading 
            levle={2} 
            color='white'
            marginBottom={2}
            
            >Picture Yourself Behind the Wheel</Heading>

            <form>
                <FormGroup>
                <Label>I want to drive a...</Label>
                </FormGroup>
                <FormGroup>
                <Select />
                <Label>Change the driving location to...</Label>
                <Select />
                </FormGroup>
            </form>
            </div>        
        <div className={styles.trimpicker__images}>Images</div>
        </section>
}
export default TrimPicker;     