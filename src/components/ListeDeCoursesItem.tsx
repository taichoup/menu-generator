import React, { useState } from 'react';
import styles from './App.module.css';

export type ListeDeCoursesItemProps = {
    label: string;
}

export const ListeDeCoursesItem = (props: ListeDeCoursesItemProps) => {
    const [checked, setChecked] = useState(false);
    const handleOnChecked = () => {
        setChecked(!checked);
    }
    return (
        <>
            <input type="checkbox" defaultChecked={checked} onChange={handleOnChecked} id={props.label} />
            <label htmlFor={props.label}>
                <span className={checked ? styles.strikethrough : ""}>
                    {props.label}
                </span>
            </label>
        </>
    );
}