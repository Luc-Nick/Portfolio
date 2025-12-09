import React from 'react'

const Navbar = ({menuItems}) => {
    return (
        <div className="navbar rounded-3xl bg-base-100 shadow-sm">
            <div className='navbar-start'>
                <a className="btn btn-ghost text-xl">Nick</a>
            </div>
            <div className='navbar-center'>
                <ul className="menu menu-horizontal px-1 gap-6">
                    {menuItems.map((item, index) => (
                        <li key={index}><a>{item}</a></li>
                    ))}
                </ul>
            </div>
            <div className='navbar-end'>
                <a className="btn">Descargar CV</a>
            </div>
        </div>
    )
}

export default Navbar