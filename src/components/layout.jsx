import React from 'react';
import '../styles/global.css'

const Layout = (props) => {

    return (

        < >
            <h1 className='bg-[#1da1f2] text-white'> {props.titulo}</h1>
            {props.children}
        </>
    );
};
export default Layout;