import React, { useEffect, useState } from 'react';
import GymItems from '../GymItems/GymItems';
import TimeZone from '../TimeZone/TimeZone';
import { selectTotalTimeCalculator } from '../../utilities/Calculator';


const Gym = () => {
    const [loadData, setLoadData] = useState([])
    const [selectPackageTime, setSelectPackageTime] = useState('00');

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, [])

    const handleAddToCard = (time) => {
        const totalTime = selectTotalTimeCalculator(time);
        setSelectPackageTime(totalTime)
    }

    return (
        <main className='grid grid-cols-12 gap-8 bg-orange-50'>
            <section className="gymItems_area col-span-12 xl:col-span-9 md:px-8">
                <GymItems
                    loadData={loadData}
                    handleAddToCard={handleAddToCard}
                />
            </section>
            <section className='timeZone_area col-span-12 xl:col-span-3 bg-white px-8'>
                <TimeZone selectPackageTime={selectPackageTime} />
            </section>
        </main>
    );
};

export default Gym;