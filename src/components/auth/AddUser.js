import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-user";
import UserModel from "../../datasource/userModel";

// This is the registration page for registering users
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
        };

        create(newUser).then(response => {
            if (response && response.id) {
                // alert("User added with the id " + response.id);
                alert("User registered successfully");
                navigate("/ads/list");
            } else {
                alert(response.message);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    };

    return (
        // -- Content for the Add page --
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add a new user</h1>

                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <input type="hidden"
                                name="id"
                                value={user.id || ''}>
                            </input>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" className="form-control"
                                id="fname"
                                placeholder="Enter the first name"
                                name="firstname"
                                value={user.firstname || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" className="form-control"
                                id="lname" placeholder="Enter last name"
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
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control"
                                id="username"
                                placeholder="Enter username"
                                name="username"
                                value={user.username || ''}
                                onChange={handleChange}>
                            </input>
                        </div>
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
                            SignUp
                        </button>

                        <Link href="#" to="/ads/list" className="btn btn-warning">
                            <i className="fas fa-undo"></i>
                            Cancel
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
