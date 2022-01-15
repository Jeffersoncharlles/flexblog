import styles from './styles.module.scss'

export const Header = () => {

    return (
        <>
            <div className={styles.superInfoBg}>
                <div>
                    <p>Seg / Sex - 08:00 às 18:00</p>
                    <a href='tel:+5562999999999'>+55 62 9999-99999</a>
                    <p>Av.145 Useke Road ,Iglecka - IG</p>
                </div>
            </div>
            <header className={styles.headerBg}>
                <div>
                    <a href="/">FlexBlog</a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="#produtos">Produtos</a>
                        </li>
                        <li>
                            <a href="#preco">Preço</a>
                        </li>
                        <li>
                            <a href="#qualidade">Qualidade</a>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    );
}