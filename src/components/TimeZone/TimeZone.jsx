import React from 'react';
import userImg from '../../images/Md Hamimul Haque.jpg';

const TimeZone = () => {
    return (
        <div className="user_Box">
            <div className="user_img my-8 text-center">
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
            </div>
        </div>
    );
};

export default TimeZone;