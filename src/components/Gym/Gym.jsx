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
        <main className='grid grid-cols-12 gap-8 bg-orange-50'>
            <section className="gymItems_area col-span-12 xl:col-span-9 md:px-8">
                <GymItems loadData={loadData} />
            </section>
            <section className='timeZone_area col-span-12 xl:col-span-3 bg-white px-8'>
                <TimeZone />
            </section>
        </main>
    );
};

export default Gym;