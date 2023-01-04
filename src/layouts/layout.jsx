import React from 'react';
import '../styles/global.css'

const Layout = (props) => {

    return (

        <div>
            <h1 className='bg-[#1da1f2] text-white'> prueba hardcodeada</h1>
            {props.children}
        </div>
    );
};
export default Layout;