import styles from './select.module.scss';

const Select = ({options}) => {
    return <select className={styles.select}>
        {options?.map((option, index) => {
            const {label, value} = option;
            return <option key={index} value={value}>{label}</option>
        })}
                
        </select>
}

export default Select;