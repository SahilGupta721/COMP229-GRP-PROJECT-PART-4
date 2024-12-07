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
