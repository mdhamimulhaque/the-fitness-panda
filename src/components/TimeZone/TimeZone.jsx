import React from 'react';
import userImg from '../../images/Md Hamimul Haque.jpg';

const TimeZone = () => {
    const breakeTimes = [10, 20, 30, 40, 50]
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
                <h2 className='text-lg font-semibold text-orange-400'>Add A Break</h2>
                <div
                    className="break_time_display bg-orange-200 p-4 rounded mt-2 flex justify-between"
                >
                    {
                        breakeTimes.map(breakTime => {
                            return (
                                <div
                                    className="time_box rounded h-10 w-10 bg-white leading-10 text-center transition ease-in-out delay-150 cursor-pointer hover:bg-orange-400 hover:text-white">
                                    {breakTime}
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </aside>
    );
};

export default TimeZone;