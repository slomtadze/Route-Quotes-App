import React from 'react'
import { NavLink } from 'react-router-dom'

import Classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={Classes.header}>
        <div className={Classes.logo}>Great Quotes</div>
        <nav className={Classes.nav}>
            <ul>
                <li>
                    <NavLink activeClassName={Classes.acitve} to='/quotes'>
                        All Quotes
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={Classes.acitve} to='/new-quote'>
                        Add a Quotes
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation
