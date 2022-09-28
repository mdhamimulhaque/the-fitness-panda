import React from 'react';
import userImg from '../../images/Md Hamimul Haque.jpg';

const TimeZone = () => {
    const breaksTime = [10, 20, 30, 40, 50]
    return (
        <aside className="user_Box">
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

            <section className='break_time'>
                <h2 className='text-3xl font-semibold text-orange-400'>Add A Break</h2>
                <div
                    className="break_time_display bg-orange-200 p-4 rounded my-4 flex justify-between"
                >
                    {
                        breaksTime.map(breakTime => {
                            return (
                                <div
                                    className="time_selector rounded h-10 w-10 bg-white leading-10 text-center transition ease-in-out delay-150 cursor-pointer hover:bg-orange-400 hover:text-white">
                                    {breakTime}m
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className='exercise_deal mt-8'>
                <h2 className='text-3xl font-semibold text-orange-400'>Exercise Details</h2>
                <div className="Exercise_time bg-orange-200 p-4 rounded my-4 flex justify-between">
                    <h2 className='font-semibold'>Exercise time</h2>
                    <h2 className='font-semibold'>2000m</h2>
                </div>

                <div className="Exercise_time bg-orange-200 p-4 rounded my-4 flex justify-between">
                    <h2 className='font-semibold'>Break time</h2>
                    <h2 className='font-semibold'>20m</h2>
                </div>

                <button
                    className="btn w-full bg-orange-400 border border-orange-400 mt-3">
                    Activity Completed
                </button>
            </section>
        </aside>
    );
};

export default TimeZone;