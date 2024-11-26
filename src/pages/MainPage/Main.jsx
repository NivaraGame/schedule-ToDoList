import styles from './Main.module.css'

function Main() {
    return(
    <>
        <div className={styles.greeting_card}>
            <p className={styles.greeting_label}>Hello, some person</p>
        </div>
        <div className={styles.marquee}>
            <div className={styles.marquee_content}>
                This is an example of endlessly running text.
            </div>
        </div>
        <div className={styles.statistic_bar}></div>
    </>);
}

export default Main