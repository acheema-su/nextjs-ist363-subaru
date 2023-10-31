import Swatches from './Swatches';
import {useState} from 'react';

const colors = [
    'red','orange','yellow'
];

const CarColorPicker = () => {
    // [State variable, set state function]
    const [activeColor, setActiveColor] = useState("red");

    return <section>
        <div style={{backgroundColor: activeColor}}
        >Large car image goes here.</div>
        <Swatches data = {colors} changeHandler = {setActiveColor}
        />
        <h3>{activeColor}</h3>
    </section>
}
export default CarColorPicker;
