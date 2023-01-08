import React from 'react';
import {  Link } from "gatsby";

import '../styles/global.css'

const Layout = (props) => {

    return (

        < >
        <nav><ul>
            <li>
            <Link to="/" className='hover:bg-green-800'>index</Link>

            </li>
            <li>
            <Link to="/tags" className='hover:bg-green-800'>tags</Link>
            </li>
        </ul>
        </nav>
        <h1 className='bg-[#1da1f2] text-white' > {props.titulo}</h1>
            {props.children}
        </>
    );
};
export default Layout;