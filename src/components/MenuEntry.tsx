import { Dish } from '../assets/plats'

export const MenuEntry = ({ name, source }: Partial<Dish>) => {
    return <td>{source ? <a href={source}>{name}</a> : name}</td>;
}