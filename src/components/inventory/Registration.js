/*
Web App Name = SELL USED PRODUCTS SITE

Description = Motive of this full-stack application is to allow users to perform CRUD operations on Advertisements related to any product, also users can post and see questions and answers.

GROUP-2, ELITES
SAHIL GUPTA(Product Manager)
Student_Id = 301436261
MICHAEL ASFEHA(Senior Software Engineer)
Student_Id = 301411864
*/

import { useState } from "react";
import intro from "../assets/videos/intro.mp4";
import { Link, useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-inventory";
import UserModel from "../../datasource/userModel";
import '../CSS/registration.css'
//this is registration page for registering users
const AddUser = () => {

    let navigate = useNavigate();
    let [user, setUser] = useState(new UserModel());

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        let newUser = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            username: user.username,
            password: user.password
        }

        create(newUser).then(response => {
            if (response && response.id) {
                alert("User added with the id " + response.id);
                navigate("/inventory/list");
            }
            else {
                alert(response.message);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err)
        });
    };

    return (
        // -- Content for the Add page --
        <div id="content">
            <div id="video_intro">
                {/* Added different video */}
                <video src={intro} autoPlay loop muted />
            </div>
            <div className="container" style={{ paddingTop: 80 }}>
            <video src={intro} autoPlay loop muted />
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <h1>Add a new user</h1>

                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-group">
                                <input type="hidden"
                                    name="id"
                                    value={user.id || ''}>
                                </input>
                                <label htmlFor="fname">Name</label>
                                <input type="text" className="form-control"
                                    id="fname"
                                    placeholder="Enter the firstname"
                                    name="firstname"
                                    value={user.firstname || ''}
                                    onChange={handleChange}
                                    required>
                                </input>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="lname">Lastname</label>
                                <input type="text" className="form-control"
                                    id="lname" placeholder="Enter lastname"
                                    name="lastname"
                                    value={user.lastname || ''}
                                    onChange={handleChange}
                                    required>
                                </input>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={user.email || ''}
                                    onChange={handleChange}>
                                </input>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="username">username</label>
                                <input type="text" className="form-control"
                                    id="username"
                                    placeholder="Enter username"
                                    name="username"
                                    value={user.username || ''}
                                    onChange={handleChange}>
                                </input>
                            </div>
                            <br />

                            <br />
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    value={user.password || ''}
                                    onChange={handleChange}>
                                </input>
                            </div>
                            <br />

                            <button className="btn btn-primary" type="submit">
                                <i className="fas fa-edit"></i>
                                Submit
                            </button>

                            <Link href="#" to="/inventory/list" className="btn btn-warning">
                                <i className="fas fa-undo"></i>
                                Cancel
                            </Link>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddUser;
