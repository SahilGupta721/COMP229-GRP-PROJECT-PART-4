/*
Web App Name = SELL USED PRODUCTS SITE

Description = Motive of this full-stack application is to allow users to perform CRUD operations on Advertisements related to any product, also users can post and see questions and answers.

GROUP-2, ELITES
SAHIL GUPTA(Product Manager)
Student_Id = 301436261
MICHAEL ASFEHA(Senior Software Engineer)
Student_Id = 301411864
*/
import { getToken } from "../components/auth/auth-helper";
let apiURL = process.env.REACT_APP_APIURL;

const list = async () => {
    try {
        let response = await fetch(apiURL + '/ads/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const create = async (ad) => {
    try {
        let response = await fetch(apiURL + '/ads/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(ad)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const disable = async (id) => {
    try {
        let response = await fetch(apiURL + '/ads/disable/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const update = async (id, ad) => {
    try {
        let response = await fetch(apiURL + '/ads/edit/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(ad)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const read = async (id) => {
    try {
        let response = await fetch(apiURL + '/ads/get/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { list, disable, create, update, read };
