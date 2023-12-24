import styles from './trimpicker.module.scss';
import Heading from './Heading';
import Label from './Label';
import Select from './Select';
import FormGroup from './FormGroup';
import { useState } from 'react';
import Image from 'next/image';
const TrimPicker = ({trims, locations}) => {
    const [ activeTrim, setActiveTrim] = useState(0);
    const [ activeLocation, setActiveLocation] = useState(0);


    const trimOptions = trims.map((trim) => {
        const {name} = trim;
        return {
            label: name,
            value: name.toLowerCase().replace(' ', '-')
        }
    });


    const locationOptions = locations.map((location) => {
        const {name} = location;
        return {
            label: name,
            value: name.toLowerCase().replace(' ', '-')
        }
     });
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
                <Select options={trimOptions} />
                </FormGroup>
                <FormGroup>
                <Label>Change the driving location to...</Label>
                <Select  options={locationOptions}/> 
                </FormGroup>
            </form>
            </div>        
        <div className={styles.trimpicker__images}>
            <Image 
                src={`/backgrounds/series-background-${activeLocation + 1}.jpg}`}
                alt={`${locations[activeLocation].name} background`}
                width={1900}
                height={656}
                className={styles.trimpicker__images__background}
            />
            <Image 
                src={`$`}
                alt={`${trims[activeTrim].images.large.sourceUrl} background`}
                width={1900}
                height={656} 
                className={styles.trimpicker__images__foreground}
            />
            </div>
        </section>
}  
export default TrimPicker;     
