import React from 'react';
// import styles from './App.module.css';
import { plat } from '../assets/plats'

export const MenuEntry = ({ name, source }: Partial<plat>) => {
    return <td>{source ? <a href={source}>{name}</a> : name}</td>;
}