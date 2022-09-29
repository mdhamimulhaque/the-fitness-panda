import React from 'react';

const Faq = () => {
    const faqData = [
        {
            qn: "How does react work?",
            ans: " ReactJS is an open-source front-end JavaScript library for building user interfaces. React allows us to create reusable UI components,developers to create large web applications that can change data, without reloading the page."
        },
        {
            qn: "What are the different between props and state?",
            ans: "Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. "
        },
        {
            qn: "Without data fetching which purpose can we use useEffect hook?",
            ans: "Running on state change: 1) validating input field. 2) live filtering. 3) trigger animation on new array value . 4) update paragraph list on fetched API data update . 6) updating fetched API data to get BTC updated price"
        },
    ]
    return (
        <div className='mt-8'>
            <h2 className='text-3xl font-semibold text-orange-400'>FAQ</h2>
            {
                faqData.map((faq) => {
                    return (
                        <div className="question_wrapper mt-3" key={faq.qn}>
                            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    {faq.qn}
                                </div>
                                <div className="collapse-content">
                                    <p> {faq.ans}</p>
                                </div>
                            </div>
                        </div>
                    )

                })
            }

        </div>
    );
};

export default Faq;