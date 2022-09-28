import React from 'react';
import GymSingleItem from '../GymSingleItem/GymSingleItem';

const GymItems = ({ loadData }) => {
    return (
        <div>
            <h2 className='text-lg md:text-3xl text-orange-400 my-8 font-semibold'>Select Your Exercise List</h2>
            <div className="gym_items_wrapper grid grid-cols-12 px-3 gap-6 md:gap-6 lg:gap-8">
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