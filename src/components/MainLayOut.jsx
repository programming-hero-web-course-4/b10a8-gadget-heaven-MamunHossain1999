import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import  { Toaster } from 'react-hot-toast';


const MainLayOut = () => {
    return (
        <div>
            <Toaster/>
            <Navbar/>
            <div className="min-h-[calc(100vh-288px)]">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayOut;