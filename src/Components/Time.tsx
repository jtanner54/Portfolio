'use client';
import { useState, useEffect } from 'react';

export default function Time() {
    const [time, setTime] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <p className='font-serif text-xs'>{time}</p>
    );
}