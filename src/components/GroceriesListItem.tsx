import { useState } from 'react';
import styles from './App.module.css';

export type Props = {
    label: string;
    count: number;
}

export const GroceriesListItem = ({ count, label }: Props) => {
    const [checked, setChecked] = useState(false);
    const handleOnChecked = () => {
        setChecked(!checked);
    }
    const suffix = `(${count})`;
    return (
        <>
            <input type="checkbox" defaultChecked={checked} onChange={handleOnChecked} id={label} />
            <label htmlFor={label}>
                <span className={checked ? styles.strikethrough : ""}>
                    {`${label}${count > 1 ? suffix : ''}`}
                </span>
            </label>
        </>
    );
}