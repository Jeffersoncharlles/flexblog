import { Product } from '../Product';
import { Sobre } from '../Sobre';
import styles from './styles.module.scss';


export const Home = () => {

    return (
        <>
            <h1 className={styles.intro}>Novos Valores &<br /> Propriedades de CSS</h1>

            <Sobre />
            <Product />
        </>
    );
}