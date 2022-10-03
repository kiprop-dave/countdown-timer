import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timer from './timer';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10vh;
    width: 50%;

    @media screen and (max-width: 600px){
        width: 95%;
    }
`

function CountDown() {
    // The uncommented code actually works, but it's too imperative 



    // const [isTimeRunning, setIsTimeRunning] = useState(false);
    // const [timeRemaining, setTimeremaining] = useState({
    //     days: 14,
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 0
    // })

    // useEffect(() => {
    //     setIsTimeRunning(true);
    //     setTimeout(() => {
    //         setTimeremaining(prev => ({
    //             days: 13,
    //             hours: 23,
    //             minutes: 59,
    //             seconds: 59
    //         }))
    //     }, 1000)
    // }, [])

    // useEffect(() => {
    //     if (first) {
    //         first = false;
    //         return;
    //     }
    //     if (isTimeRunning) {
    //         countDown();
    //     }
    // }, [timeRemaining])

    // function countDown() {
    //     setTimeout(() => {
    //         setTimeremaining(prev => {
    //             if (prev.seconds > 0) {
    //                 return {
    //                     ...prev,
    //                     seconds: prev.seconds - 1
    //                 }
    //             } else if (prev.seconds === 0 && prev.minutes > 0) {
    //                 return {
    //                     ...prev,
    //                     seconds: 59,
    //                     minutes: prev.minutes - 1
    //                 }
    //             } else if (prev.minutes === 0 && prev.hours > 0) {
    //                 return {
    //                     ...prev,
    //                     minutes: 59,
    //                     hours: prev.hours - 1
    //                 }
    //             } else if (prev.hours === 0 && prev.days > 0) {
    //                 return {
    //                     ...prev,
    //                     hours: 23,
    //                     days: prev.days - 1
    //                 }
    //             } else if (prev.days === 0) {
    //                 return {
    //                     ...prev,
    //                     days: 0
    //                 }
    //             }
    //         })
    //     }, 1000)
    // }

    // const { days, hours, minutes, seconds } = timeRemaining

    // const over = days === 0 && hours === 0 && minutes === 0 && seconds === 0;
    // if (over) {
    //     setIsTimeRunning(false);
    // }
    const [timeRemaining, setTimeRemaining] = useState({
        days: 14,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const numOfDays = 14 * 24 * 60 * 60 * 1000; // declare number of days in miliseconds
    const futureTimeInms = Date.now() + numOfDays; // time to stop in miliseconds

    const getTime = () => {
        const difference = futureTimeInms - Date.now();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / (1000));

        return { days, hours, minutes, seconds }
    }
    useEffect(() => {
        setInterval(() => {
            setTimeRemaining(() => getTime())
        }, 1000)
    }, [])

    const { days, hours, minutes, seconds } = timeRemaining

    return (
        <>
            <Container>
                {/* {
                    !over ?
                        <>
                            <Timer label={'DAYS'} time={days} />
                            <Timer label={'HOURS'} time={hours} />
                            <Timer label={'MINUTES'} time={minutes} />
                            <Timer label={'SECONDS'} time={seconds} />
                        </> :
                        <div>It's over</div>
                } */}
                <Timer label={'DAYS'} time={days} />
                <Timer label={'HOURS'} time={hours} />
                <Timer label={'MINUTES'} time={minutes} />
                <Timer label={'SECONDS'} time={seconds} />
            </Container>
        </>
    )
}

export default CountDown