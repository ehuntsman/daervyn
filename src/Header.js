import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';

import logo from './Home/images/daervyntextonly.svg';
import pattern from './Home/images/pattern.svg';

export default function Header() {
  return (
    <section className="header">
        <div className="header-container-desktop">
            <div className="header-part logo header-left">
                <Link to="/">
                    <img src={logo} alt="Daervyn" />
                </Link>
            </div>
            <div className="header-part central-pattern">
                <img src={pattern} alt="Daervyn" />
            </div>
            <div className='header-part header-right'>
                <ul className='header-part'>
                    <li><Link to="/story/shards">shards</Link></li>
                    <li><Link to="/story/races">races</Link></li>
                    <li><Link to="/story/bestiary">bestiary</Link></li>
                </ul>
            </div>
        </div>
        <div className="header-container-mobile">
            <div className="header-part logo">
                <Link to="/">
                    <img src={logo} alt="Daervyn" />
                </Link>
            </div>
        </div>
    </section>
  )
}
