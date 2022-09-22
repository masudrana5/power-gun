import React from 'react';

const Navbar = ({ count}) => {
   return (
      <div className='lg:px-10'>
         <div className="navbar bg-slate-500 text-white">
            <div className="flex-1">
               <a href='/' className="btn btn-ghost normal-case text-3xl ">Power Gun!</a>
               <div className="ml-80 hidden lg:flex">
                  <ul className="menu menu-horizontal text-xl font-semibold p-0">
                     <li><a href='./'>Home</a></li>
                     <li><a href="./">Blog</a></li>
                     <li><a href='./'>Class</a></li>
                  </ul>
               </div>
            </div>
            <div className="flex-none">
               <div className="dropdown dropdown-end mr-6">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                     <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item text-black bg-white">{ count}</span>
                     </div>
                  </label>
                  <div tabIndex={0} className="mt-5 card card-compact dropdown-content w-52 bg-base-100 shadow">
                     <div className="card-body">
                        <span className="font-bold text-lg text-black">{ count}</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                           <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="form-control hidden lg:block">
                  <input type="text" placeholder="Search" className="input input-bordered" />
               </div>
               <div className="dropdown dropdown-end lg:hidden">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full">
                        <img alt='' src="https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" />
                     </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     <li>
                        <a href='/' className="justify-between">
                           Profile
                           <span className="badge">New</span>
                        </a>
                     </li>
                     <li><a href='/'>Settings</a></li>
                     <li><a href='/'>Logout</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;