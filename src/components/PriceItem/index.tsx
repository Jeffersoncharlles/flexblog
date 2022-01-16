import styles from './styles.module.scss'

interface PriceItemProps {
    name: string;
    valor: number;
    completed: string[];
}

export const PriceItem = ({ name, valor, completed }: PriceItemProps) => {

    return (
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
    );
}