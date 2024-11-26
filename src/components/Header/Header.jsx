import styles from './Header.module.css'

function Header() {

    return(<>
        <ul className={styles.navbar}>
            <li><a href="#">Home</a></li>
            <li><a href="#">To-Do</a></li>
            <li><a href="#">Schedule</a></li>
            <li className={styles.right_end}><a href="#">About</a></li>
        </ul>
    </>);
}

export default Header