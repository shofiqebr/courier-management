import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[600px]'>

            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;