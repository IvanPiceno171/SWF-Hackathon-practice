import styles from './navbar.module.css'

export const NavLinks = () => {

    return (

        <ul className={styles.NavbarUl} >
            <li><a href="/" >Logo</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Join the team</a></li>
        </ul>
    )
}