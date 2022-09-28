import React from 'react';
import GymSingleItem from '../GymSingleItem/GymSingleItem';

const GymItems = ({ loadData }) => {
    return (
        <div>
            <h2 className='text-3xl text-orange-400 my-8 text-bold'>Select Your Exercise List</h2>
            <div className="gym_items_wrapper grid grid-cols-12 gap-8">
                {
                    loadData.map((cardInfo) =>
                        <GymSingleItem
                            key={cardInfo._id}
                            cardInfo={cardInfo}
                        />)
                }
            </div>
        </div>
    );
};

export default GymItems;