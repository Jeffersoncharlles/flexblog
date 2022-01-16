import styles from './styles.module.scss'
import produto1 from '../../assets/produtos1.jpg';

interface ProductProps {
    color: string;
    img: string;
    name: string;
}

export const ProductItem = ({ color, img, name }: ProductProps) => {

    return (
        <div className={styles.produtosItem}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    );
}