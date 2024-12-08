/*
Web App Name = SELL USED PRODUCTS SITE

Description = Motive of this full-stack application is to allow users to perform CRUD operations on Advertisements related to any product, also users can post and see questions and answers.

GROUP-2, ELITES
SAHIL GUPTA(Product Manager)
Student_Id = 301436261
MICHAEL ASFEHA(Senior Software Engineer)
Student_Id = 301411864
*/

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { read, update } from "../../datasource/api-ads";
import AdsModel from "../../datasource/adsModel";

const EditAds = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    let [ad, setAd] = useState(new AdsModel());

    useEffect(() => {
        read(id).then((response) => {
            if (response) {
                setAd(new AdsModel(
                    response.id,
                    response.title,
                    response.description,
                    response.price,
                    response.createdAt,
                    response.expiresAt,
                    response.isActive,
                    response.owner
                ));
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAd((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedAd = {
            title: ad.title,
            description: ad.description,
            price: ad.price,
            createdAt: ad.createdAt,
            expiresAt: ad.expiresAt,
            isActive: ad.isActive,
            owner: ad.owner
        };

        update(id, updatedAd).then(response => {
            if (response && response.success) {
                alert(response.message);
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
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Edit an ad</h1>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="titleTextField">Title</label>
                            <input type="text" className="form-control"
                                id="titleTextField"
                                placeholder="Enter the title"
                                name="title"
                                value={ad.title || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="descriptionTextField">Description</label>
                            <textarea className="form-control"
                                id="descriptionTextField"
                                placeholder="Enter the description"
                                name="description"
                                value={ad.description || ''}
                                onChange={handleChange}
                                required>
                            </textarea>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="priceTextField">Price</label>
                            <input type="text" className="form-control"
                                id="priceTextField"
                                placeholder="Enter the price"
                                name="price"
                                value={ad.price || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="expiresAtTextField">Expires At</label>
                            <input type="date" className="form-control"
                                id="expiresAtTextField"
                                name="expiresAt"
                                value={ad.expiresAt || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <button className="btn btn-primary" type="submit">
                            <i className="fas fa-edit"></i>
                            Submit
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

export default EditAds;
