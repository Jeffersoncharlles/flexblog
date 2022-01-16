import styles from './styles.module.scss';

interface QualityItemProps {
    name: string;
    text: string;
}

export const QualityItem = ({ name, text }: QualityItemProps) => {

    return (
        <div className={styles.qualidadeItem}>
            <h2>{name}</h2>
            <p>{text}</p>
        </div>
    );
}