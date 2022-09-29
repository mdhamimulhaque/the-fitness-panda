import React from 'react';

const SelectBreakTime = ({ breaksTime }) => {
    return (
        <div className="break_time_display bg-orange-200 p-4 rounded my-4 flex justify-between">
            {
                breaksTime.map((breakTime, index) => {
                    return (
                        <div
                            key={index}
                            className="time_selector rounded h-10 w-10 bg-white leading-10 text-center transition ease-in-out delay-150 cursor-pointer hover:bg-orange-400 hover:text-white">
                            {breakTime}m
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SelectBreakTime;