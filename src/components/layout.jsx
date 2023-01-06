import React from 'react';
import {  Link } from "gatsby";

import '../styles/global.css'

const Layout = (props) => {

    return (

        < >
        <Link to="/" className='hover:bg-green-800'>index</Link>
            <h1 className='bg-[#1da1f2] text-white' > {props.titulo}</h1>
            {props.children}
        </>
    );
};
export default Layout;