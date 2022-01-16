import styles from './styles.module.scss'

export const Newsletter = () => {

    return (
        <section className={styles.newsletter}>
            <div>
                <h1>Newsletter</h1>
                <p>assine e fique por dentro das novidades</p>
            </div>
            <form>
                <input type="text" placeholder='Seu e-mail' />
                <button type='submit'>Assinar</button>
            </form>
        </section>
    );
}