import React from 'react';

const GymSingleItem = ({ cardInfo, handleAddToCard }) => {
    const { picture, age, title, desc, time } = cardInfo;
    return (
        <div className='gyn_single_item_box col-span-12 md:col-span-6 xl:md:col-span-4'>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={picture} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-400">{title}</h2>
                    <p>{desc}</p>
                    <p>Minimum Age Required: {age}</p>
                    <p>Time Required : {time}m</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn w-full bg-orange-400 border border-orange-400 mt-3"
                            onClick={() => { handleAddToCard(time) }}
                        >
                            Add To List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GymSingleItem;