import React from 'react';

const SelectBreakTime = ({ breaksTime, handleBreakTime }) => {
    return (
        <div className="break_time_display bg-orange-200 p-4 rounded my-4 flex justify-between">
            {
                breaksTime.map((bkt, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => { handleBreakTime(bkt) }}
                            className="time_selector rounded h-10 w-10 bg-white leading-10 text-center transition ease-in-out delay-150 cursor-pointer hover:bg-orange-400 hover:text-white">
                            {bkt}mn
                        </button>
                    )
                })
            }
        </div>
    );
};

export default SelectBreakTime;