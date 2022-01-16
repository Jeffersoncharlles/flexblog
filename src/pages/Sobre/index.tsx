import styles from './styles.module.scss';
import sobre1 from '../../assets/sobre1.jpg'
import sobre2 from '../../assets/sobre2.jpg'

export const Sobre = () => {

    return (
        <section className={styles.about} id="sobre">
            <div className={styles.aboutInfo}>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cupiditate temporibus nulla nemo quo, dicta officiis, nihil facilis sit dolorem illum debitis eaque deleniti omnis earum, eveniet distinctio velit asperiores.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eum, ad laudantium delectus iste molestias accusantium deleniti soluta corrupti ducimus tenetur, vitae recusandae a quod. Tempore nisi molestiae assumenda error?</p>
            </div>
            <div className={styles.aboutImg}>
                <img src={sobre1} alt="Sobre 1" />
            </div>
            <div className={styles.aboutImg}>
                <img src={sobre2} alt="Sobre 2" />
            </div>
        </section>
    );
}