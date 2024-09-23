import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className={s.navbar}>

    <ul className={s.navbar__list}>
        <li>
            <NavLink to='/' className={s.link}>Home</NavLink>
        </li>

    </ul>

    </div>
    </>
  )
}

export default Navbar