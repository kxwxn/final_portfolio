import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.navi}>
                <Link to='/'>nowik</Link>
                <Link to='/photograph'>Photograph</Link>
                <Link to='/3d'>3D</Link>
                <Link to='/soccer'>Soccer-Data</Link>
                <Link to='/music'>Music</Link>
            </div>
            <div className={styles.navi}>
                <Link to='/'>nowik</Link>
                <Link to='/photograph'>Photograph</Link>
                <Link to='/3d'>3D</Link>
                <Link to='/soccer'>Soccer-Data</Link>
                <Link to='/music'>Music</Link>
            </div>
        </div>
    )
}

export default Header