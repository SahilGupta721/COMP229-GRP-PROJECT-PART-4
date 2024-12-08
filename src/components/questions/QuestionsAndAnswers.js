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
import { useParams, useNavigate } from "react-router-dom";
import { listQuestions, answerQuestion } from "../../datasource/api-questions";
import { isAuthenticated, getUsername } from "../auth/auth-helper";

const QuestionsAndAnswers = () => {
    let { adId } = useParams();
    let navigate = useNavigate();
    let [questions, setQuestions] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [answer, setAnswer] = useState("");

    useEffect(() => {
        listQuestions(adId).then((data) => {
            if (data) {
                setQuestions(data.questions);
                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }, [adId]);

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (questionId) => {
        answerQuestion(questionId, { answerTxt: answer }).then(response => {
            if (response && response.success) {
                alert("Question answered successfully");
                setAnswer("");
                // Refresh the questions list
                listQuestions(adId).then((data) => {
                    if (data) {
                        setQuestions(data.questions);
                    }
                }).catch(err => {
                    alert(err.message);
                    console.log(err);
                });
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
                    <h1>Questions and Answers</h1>
                    {isLoading && <div>Loading...</div>}
                    {!isLoading && questions.length === 0 && <div>No questions yet.</div>}
                    {!isLoading && questions.length > 0 && (
                        <ul className="list-group">
                            {questions.map((question, i) => (
                                <li key={i} className="list-group-item">
                                    <p><strong>Question:</strong> {question.questionTxt}</p>
                                    <p><strong>Answer:</strong> {question.answerTxt || "No answer yet"}</p>
                                    {isAuthenticated() && question.answerTxt === undefined && (
                                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(question._id); }}>
                                            <div className="form-group">
                                                <label htmlFor="answerTextField">Your Answer</label>
                                                <textarea className="form-control"
                                                    id="answerTextField"
                                                    placeholder="Enter your answer"
                                                    value={answer}
                                                    onChange={handleChange}
                                                    required>
                                                </textarea>
                                            </div>
                                            <br />
                                            <button className="btn btn-primary" type="submit">
                                                <i className="fas fa-paper-plane"></i>
                                                Submit
                                            </button>
                                        </form>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                    <button className="btn btn-warning" onClick={() => navigate("/ads/list")}>
                        <i className="fas fa-undo"></i>
                        Back to Ads List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionsAndAnswers;
