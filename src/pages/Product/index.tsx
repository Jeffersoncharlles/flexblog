import styles from './styles.module.scss'
import produto1 from '../../assets/produtos1.jpg';
import produto2 from '../../assets/produtos2.jpg';
import produto3 from '../../assets/produtos3.jpg';


export const Product = () => {
    return (
        <section className={styles.product} id='produtos'>
            <h1>Produtos</h1>
            <div className={styles.product_container}>
                <div className={styles.produtosItem}>
                    <h2>Purple</h2>
                    <img src={produto1} alt="Produtos 1" />
                </div>
                <div className={styles.produtosItem}>
                    <h2>Pink</h2>
                    <img src={produto2} alt="Produtos 2" />
                </div>
                <div className={styles.produtosItem}>
                    <h2>Blue</h2>
                    <img src={produto3} alt="Produtos 3" />
                </div>
            </div>
        </section>
    );
}