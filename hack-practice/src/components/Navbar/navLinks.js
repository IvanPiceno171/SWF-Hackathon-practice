import App from '../../App'
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'

export const NavLinks = () => {

    return (
<>
        <ul className={styles.NavbarUl} >
            
            <li><NavLink to='/' reloadDocument >Home Page</NavLink></li>

            <li><NavLink to='/About'>About</NavLink></li>
            
        </ul>
</>        
    )
}