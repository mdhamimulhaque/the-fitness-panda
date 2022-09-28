import React, { useEffect, useState } from 'react';

const Gym = () => {
    const [loadData, setLoadData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, [])
    return (
        <main>
            <section className="gymItems_area">

            </section>
            <section className='timeZone_area'></section>
        </main>
    );
};

export default Gym;