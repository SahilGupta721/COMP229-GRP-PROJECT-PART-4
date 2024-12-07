import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createQuestion } from "../../datasource/api-questions";

const AskQuestion = () => {
    let { adId } = useParams();
    let navigate = useNavigate();
    let [question, setQuestion] = useState("");

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createQuestion(adId, { questionTxt: question }).then(response => {
            if (response && response.success) {
                alert("Question posted successfully");
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
                    <h1>Ask a Question</h1>

                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="questionTextField">Question</label>
                            <textarea className="form-control"
                                id="questionTextField"
                                placeholder="Enter your question"
                                value={question}
                                onChange={handleChange}
                                required>
                            </textarea>
                        </div>
                        <br />

                        <button className="btn btn-primary" type="submit">
                            <i className="fas fa-paper-plane"></i>
                            Submit
                        </button>

                        <button className="btn btn-warning" onClick={() => navigate("/ads/list")}>
                            <i className="fas fa-undo"></i>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AskQuestion;
