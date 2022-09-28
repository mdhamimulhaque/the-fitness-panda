import React, { useEffect, useState } from 'react';
import GymItems from '../GymItems/GymItems';
import TimeZone from '../TimeZone/TimeZone';

const Gym = () => {
    const [loadData, setLoadData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, [])
    return (
        <main className='grid grid-cols-12 px-8 gap-8'>
            <section className="gymItems_area col-span-12 lg:col-span-9">
                <GymItems loadData={loadData} />
            </section>
            <section className='timeZone_area col-span-12 lg:col-span-3'>
                <TimeZone />
            </section>
        </main>
    );
};

export default Gym;