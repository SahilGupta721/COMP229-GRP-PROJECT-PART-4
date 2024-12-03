import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-inventory";
import UserModel from "../../datasource/userModel";

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
            id : user.id,
            firstname : user.firstname,
            lastname : user.lastname,
            email: user.email,
            username:user.username,
            password:user.password
        }

        create(newUser).then(response => {
            if(response && response.id)
            {
                alert("User added with the id "+ response.id);
                navigate("/inventory/list");
            }
            else{
                alert(response.message);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err)
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
                        <br/>
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
                        {/* <div className="card">
                            <div className="card-header">Size</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="hightTextField">Hight</label>
                                    <input type="number" step="0.01"
                                        className="form-control"
                                        id="hightTextField"
                                        placeholder="0.00"
                                        name="size_h"
                                        value={product.size_h || 0}
                                        required
                                        onChange={handleChange}>
                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="widthTextField">Width</label>
                                    <input type="number" step="0.01"
                                        className="form-control"
                                        id="widthTextField"
                                        placeholder="0.00"
                                        name="size_w"
                                        value={product.size_w || 0}
                                        onChange={handleChange}
                                        required>
                                    </input>
                        //        </div> */}
{/* 
                                <div className="form-group">
                                    <label htmlFor="uomTextField">UOM</label>
                                    <input type="text" className="form-control"
                                        id="uomTextField"
                                        placeholder="cm"
                                        name="size_uom"
                                        value={product.size_uom || ''}
                                        onChange={handleChange}
                                        required>
                                    </input>
                                </div>
                            </div>
                        </div> */}
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
    );
};

export default AddUser;
