import { Footer } from '../../components/Footer';
import { Newsletter } from '../Newsletter';
import { Price } from '../Price';
import { Product } from '../Product';
import { Qualidade } from '../Qualidade';
import { Sobre } from '../Sobre';
import styles from './styles.module.scss';


export const Home = () => {

    return (
        <>
            <h1 className={styles.intro}>Novos Valores &<br /> Propriedades de CSS</h1>

            <Sobre />
            <Product />
            <Price />
            <Qualidade />
            <Newsletter />
            <Footer />
        </>
    );
}