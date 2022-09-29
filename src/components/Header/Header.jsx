import React from 'react';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <header>
            <div className="navbar bg-orange-200">
                <div className="flex-1">
                    <img className='w-12' src={logo} alt="" />
                    <a href='/home' className="btn btn-ghost normal-case text-2xl">The Fitness Parade</a>
                </div>
                <nav className='mr-5 hidden lg:block'>
                    <a className='mx-5 font-medium hover:text-white ' href="/home">Home</a>
                    <a className='mx-5 font-medium hover:text-white ' href="/about">About</a>
                    <a className='mx-5 font-medium hover:text-white ' href="/service">Service</a>
                    <a className='mx-5 font-medium hover:text-white ' href="/blog">Blog</a>
                </nav>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;