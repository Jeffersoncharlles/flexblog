import styles from './styles.module.scss'

export const Price = () => {

    return (
        <section className={styles.price} id='preco'>
            <div className={styles.priceItem}>
                <h2>Cobre</h2>
                <span><sup>R$</sup>19</span>
                <ul>
                    <li>Planos Ilimitados</li>
                    <li>Acesso Restrito</li>
                    <li>Conteúdo Secreto</li>
                    <li>Suporte 24h</li>
                </ul>
                <button type="submit">Comprar</button>
            </div>
            <div className={styles.priceItem}>
                <h2>Prata</h2>
                <span><sup>R$</sup>39</span>
                <ul>
                    <li>Planos Ilimitados</li>
                    <li>Acesso Restrito</li>
                    <li>Conteúdo Secreto</li>
                    <li>Suporte 24h</li>
                    <li>Compra Exclusiva</li>
                </ul>
                <button type="submit">Comprar</button>
            </div>
            <div className={styles.priceItem}>
                <h2>Ouro</h2>
                <span><sup>R$</sup>79</span>
                <ul>
                    <li>Planos Ilimitados</li>
                    <li>Acesso Restrito</li>
                    <li>Conteúdo Secreto</li>
                    <li>Suporte 24h</li>
                    <li>Compra Exclusiva</li>
                    <li>Download dos itens</li>
                </ul>
                <button type="submit">Comprar</button>
            </div>
        </section>
    );
}