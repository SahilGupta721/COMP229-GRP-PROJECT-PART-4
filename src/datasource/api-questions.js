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

const createQuestion = async (adId, question) => {
    try {
        let response = await fetch(apiURL + '/questions/create/' + adId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(question)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const listQuestions = async (adId) => {
    try {
        let response = await fetch(apiURL + '/questions/' + adId, {
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

const answerQuestion = async (questionId, answer) => {
    try {
        let response = await fetch(apiURL + '/questions/edit/' + questionId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(answer)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { createQuestion, listQuestions, answerQuestion };
