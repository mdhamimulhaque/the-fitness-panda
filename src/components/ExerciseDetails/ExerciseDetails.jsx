import React from 'react';
import Swal from 'sweetalert2';
import Faq from '../Faq/Faq';

const ExerciseDetails = ({ selectPackageTime, showBreakTime }) => {
    const handleCompleted = () => {
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Your Activity has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div>
            <div className="exercise_time_container bg-orange-200 p-4 rounded my-4 flex justify-between">
                <h2 className='font-semibold'>Exercise time</h2>
                <h2 className='font-semibold'>{selectPackageTime}m</h2>
            </div>

            <div className="break_time_container bg-orange-200 p-4 rounded my-4 flex justify-between">
                <h2 className='font-semibold'>Break time</h2>
                <h2 className='font-semibold'>{showBreakTime}m</h2>
            </div>

            <button
                className="btn w-full bg-orange-400 border border-orange-400 mt-3"
                onClick={handleCompleted}
            >
                Activity Completed

            </button>
            <Faq />
        </div>
    );
};

export default ExerciseDetails;