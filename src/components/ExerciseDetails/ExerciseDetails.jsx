import React from 'react';

const ExerciseDetails = () => {
    return (
        <div>
            <div className="exercise_time_container bg-orange-200 p-4 rounded my-4 flex justify-between">
                <h2 className='font-semibold'>Exercise time</h2>
                <h2 className='font-semibold'>2000m</h2>
            </div>

            <div className="break_time_container bg-orange-200 p-4 rounded my-4 flex justify-between">
                <h2 className='font-semibold'>Break time</h2>
                <h2 className='font-semibold'>20m</h2>
            </div>

            <button
                className="btn w-full bg-orange-400 border border-orange-400 mt-3">
                Activity Completed
            </button>
        </div>
    );
};

export default ExerciseDetails;