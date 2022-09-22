import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
   const [modalData, setModalData] = useState({})
   const { gun, countIncrease } = props;
   const { action, bullet, img, name, price } = gun;
   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-80 h-64' src={img} alt="Shoes" /></figure>
            <div className="card-body text-left">
               <h2 className="card-title">
                  Name: {name}
               </h2>
               <p>Action: {action}</p>
               <p>Bullet: {bullet}</p>
               <p>Price: {price}</p>
               <div className="card-actions justify-between">
                  <label onClick={()=> setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button">Show Details</label>
                  <button onClick={()=> countIncrease()} className="btn btn-primary">Buy Now</button>
               </div>
            </div>
         </div>
         {
           modalData && (<Modal data={modalData} setModalData={setModalData}></Modal>)
         }
      </div>
   );
};

export default SingleGun;