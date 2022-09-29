import React from 'react';
import userImg from '../../images/Md Hamimul Haque.jpg';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import SelectBreakTime from '../SelectBreakTime/SelectBreakTime';

const TimeZone = () => {
    const breaksTime = [10, 20, 30, 40, 50]
    return (
        <aside className="user_container">
            <section className="user_img my-8 text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring  ring-offset-base-100 ring-offset-2">
                        <img src={userImg} />
                    </div>
                </div>
                <div className="user_info">
                    <h2 className='text-lg'>Md Hamimul Haque</h2>
                    <small className='text-orange-400'>- Front End Web Developer -</small>
                    <p>I'm an experienced Front-End Web developer & Graphic Designer. I'm a hard-working creature, who is passionate about technology, design, and innovation. I like to play with colours and codes.</p>
                </div>
            </section>

            <div className="break_exercise_counter_area">
                <section className='select_break_time_container'>
                    <h2 className='text-3xl font-semibold text-orange-400'>Add A Break</h2>
                    <SelectBreakTime breaksTime={breaksTime} />
                </section>

                <section className='exercise_details_area mt-8'>
                    <h2 className='text-3xl font-semibold text-orange-400'>Exercise Details</h2>
                    <ExerciseDetails />
                </section>
            </div>
        </aside>
    );
};

export default TimeZone;