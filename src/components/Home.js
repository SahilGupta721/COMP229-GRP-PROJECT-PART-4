/*
Web App Name = SELL USED PRODUCTS SITE

Description = Motive of this full-stack application is to allow users to perform CRUD operations on Advertisements related to any product, also users can post and see questions and answers.

GROUP-2, ELITES
SAHIL GUPTA(Product Manager)
Student_Id = 301436261
MICHAEL ASFEHA(Senior Software Engineer)
Student_Id = 301411864
*/
import intro from '../assets/videos/intro.mp4';
import { NavLink } from 'react-router-dom';

import '../CSS/Home.css'
const Home = () => {
    return (
        <>

            <div id="home_video">
                <video src={intro} autoPlay loop muted></video>
            </div>
            <div id="content_home">
                <h1>Wecome to the Inventory Mania</h1>
                <div className='section'>
                    <div id="section_one_content">
                       
                        <ul>
                            <li className='benefits'>CREATE UNLIMITED ADS</li>
                            <li className='benefits'>
                                GROW YOUR BUSINESS
                            </li>
                            <li className='benefits'>
                                HELP CUSTOMERS WITH PRODUCTS QUERY
                            </li>
                        </ul>
                        <div id="buttons">
                        <span id="button"><NavLink to='/users/signup'>Register</NavLink></span>
                        <span id="button_two"><NavLink to='/users/signin'>Sign In</NavLink></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
