'use client';
import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
    const interval = setInterval(callback, 1000);
    return () => clearInterval(interval);
}

function getSnapshot() {
    return new Date().toLocaleTimeString();
}

function getServerSnapshot() {
    return '--:--:-- --';
}

export default function Time() {
    const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    return (
        <p className='font-serif text-xs' suppressHydrationWarning>
            {time}
        </p>
    );
}
