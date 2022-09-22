import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import "./AllGun.css";

const AllGun = ({countIncrease}) => {
   const [guns, setGuns] = useState([]);
   useEffect(() => {
      fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
         .then(res => res.json())
         .then(data => setGuns(data));
   }, [])
   return (
      <div>
         <h1>Hello All Gun</h1>
         <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
               guns.map(gun => <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun>)
            }
         </div>
      </div>
   );
};

export default AllGun;