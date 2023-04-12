import styles from './navbar.module.css'
import { NavLinks } from "./navLinks";


const Navbar = () =>{
    return(
        <>
        <div className={styles.NavbarContainer}>

        <NavLinks/>
        
        </div>
        
        </>
    )
}

export default Navbar;