import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
import MyLocation from './MyLocation/MyLocation';


const About = () => {
    const navigate = useNavigate();
    const [about, setAbout] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5080/about', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status=== 403){
                navigate('/login');
            }
            return res.json()})
        .then(data => {
            console.log(data);
        })

    }, []);
    return (
        <div>
            <PageTitle title="About"></PageTitle>
            <h2 className='text-center'>About me</h2>
            <div className='d-flex container containerr align-items-center'>
                <div className='w-50'>
                    <h2>NaYem HaSan</h2>
                    <p>Thanks for giving me this golden opportunity to introduce myself before this panel. i’m a front-end web developer i working on web development sector last 2 year and i still trying to improve my skills and i always try to learn as many thing as possible , And My Future Goals is Become an Full Stack Web Developer and inner future i want to work with Ai And I'm Interested in App Development and software engineer en But my next 6month Goals is become Front-End Web Developer And Explore Little Bit Back-End.</p>
                </div>
                <div className='w-50 '>
                    <img className='w-100' src='https://hasannayeeem.github.io/mission-2022/images/hero.png' alt=''></img>
                </div>
            </div>
            <MyLocation></MyLocation>
        </div>
    );
};

export default About;