import { useEffect, useState } from "react";
import { list, disable } from "../../datasource/api-ads";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/auth-helper";

const ListAds = () => {
    let [adsList, setAdsList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        list().then((data) => {
            if (data) {
                setAdsList(data);
                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }, []);

    const handleDisable = (id) => {
        if (!isAuthenticated())
            window.alert('You are not authenticated. Please, proceed with sign-in first.')
        else {
            if (window.confirm('Are you sure you want to disable this ad?')) {
                disable(id).then(data => {
                    if (data && data.success) {
                        const newList = adsList.filter((ad) => ad.id !== id);
                        setAdsList(newList);
                    }
                    else {
                        alert(data.message);
                    }
                }).catch(err => {
                    alert(err.message);
                    console.log(err);
                });
            };
        }
    };

    return (
        //   -- Main Content --
        <main className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <h1>Ads List</h1>

                <div>
                    <Link to="/ads/add" className="btn btn-primary align-self-end" role="button">
                        <i className="fas fa-plus-circle"></i>
                        Add a new Ad
                    </Link>
                </div>
                <br />
                <br />
                <div className="table-responsive" >
                    {isLoading && <div>Loading...</div>}
                    {!isLoading &&
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                {/* -- Header Row-- */}
                                <tr>
                                    <th className="text-center">Title</th>
                                    <th className="text-center">Description</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Expires At</th>
                                    <th className="text-center">Owner</th>
                                    <th className="text-center" colSpan="3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* -- Repeatable Template Row -- */}
                                {adsList.map((ad, i) => {
                                    return (<tr key={i}>
                                        {console.log(ad)}
                                        <td className="text-center"> {ad.title || ''} </td>
                                        <td className="text-center"> {ad.description || ''} </td>
                                        <td className="text-center"> {ad.price || ''} </td>
                                        <td className="text-center"> {ad.expiresAt || ''} </td>
                                        <td className="text-center"> {ad.owner ? ad.owner.name : ''} </td>
                                        <td className="text-center">
                                            <Link className="btn bg-primary btn-primary btn-sm" to={'/ads/edit/' + ad.id}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <button
                                                className="btn bg-danger btn-danger btn-sm"
                                                onClick={() => handleDisable(ad.id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>}
                </div>
            </div >
        </main >)
};

export default ListAds;
