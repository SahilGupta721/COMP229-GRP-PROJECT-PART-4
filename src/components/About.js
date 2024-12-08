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
import '../CSS/about.css'


const About = () => {
    return (
        <>
        <div id="about_video">
                <video src={intro} autoPlay loop muted></video>
            </div>
            <div id="content_about">
                <h1>Inventory Mania</h1>
                <div className='about_section'>
                    <div id="about_section_one_content">
                    Inventory Mania is your all-in-one platform for managing inventory while creating engaging advertisements and interacting with your audience. Designed for both small businesses and large-scale operations, Inventory Mania simplifies the management of your products while offering tools to promote and engage.
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;