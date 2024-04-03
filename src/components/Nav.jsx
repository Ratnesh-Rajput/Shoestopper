import React from 'react'
import {headerLogo} from "../assets/images/index";
import {hamburger} from "../assets/icons"
import {navLinks} from "../constants";
function Nav() {
    return (
      <header className='padding-x absolute z-10  w-full py-8 '>
        <nav className='flex justify-between  items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Shoestopper-logo" width={130} height={29} />
            </a>
            <ul className='flex flex-1 gap-16 justify-center items-center z-10'>
                {navLinks.map((item)=> (
                    <li key={item.label}>
                            <a href={item.href}
                             className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className=' hidden max-lg:block'>
                <img src={hamburger} alt="Ham menu" className='w-5 h-5 '/>
            </div>
              
        </nav>
      </header>  
    )
}

export default Nav;
