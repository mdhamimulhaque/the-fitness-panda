import React, { useEffect, useState } from 'react';
import userImg from '../../images/mdhamimulhaque.jpg';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import SelectBreakTime from '../SelectBreakTime/SelectBreakTime';

const TimeZone = ({ selectPackageTime }) => {
    const breaksTime = [10, 20, 30, 40, 50]

    const [showBreakTime, setShowBreakTime] = useState('00');

    const handleBreakTime = (time) => {
        setShowBreakTime(time);
        localStorage.setItem('breakTime', JSON.stringify(time));
    }

    useEffect(() => {
        const getData = localStorage.getItem('breakTime');
        if (getData) {
            setShowBreakTime(getData)
        } else {
            setShowBreakTime(showBreakTime)
        }

    }, [showBreakTime])


    return (
        <aside className="user_container">
            <section className="user_img my-8 text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring  ring-offset-base-100 ring-offset-2">
                        <img src={userImg} />
                    </div>
                </div>
                <div className="user_info">
                    <h2 className='text-lg font-semibold'>Md Hamimul Haque</h2>
                    <small className='text-orange-400'>- Front End Web Developer -</small>
                    <p>I'm an experienced Front-End Web developer & Graphic Designer. I'm a hard-working creature, who is passionate about technology, design, and innovation. I like to play with colours and codes.</p>
                </div>
            </section>

            <div className="break_exercise_counter_area">
                <section className='select_break_time_container'>
                    <h2 className='text-3xl font-semibold text-orange-400'>Add A Break</h2>
                    <SelectBreakTime
                        breaksTime={breaksTime}
                        handleBreakTime={handleBreakTime}
                    />
                </section>

                <section className='exercise_details_area mt-8'>
                    <h2 className='text-3xl font-semibold text-orange-400'>Exercise Details</h2>
                    <ExerciseDetails
                        selectPackageTime={selectPackageTime}
                        showBreakTime={showBreakTime}
                    />
                </section>
            </div>
        </aside>
    );
};

export default TimeZone;