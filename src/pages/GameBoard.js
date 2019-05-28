import React, { Component } from 'react';
import { connect } from "react-redux";
import { getQuests, getCurrQuestion, updateQuestion } from '../actions/gameActions';


class GameBoard extends Component {
    state = {
        answeredQuestions: [],
        isLastQuestion: false,
        selectedAnswer: null,
        playerScore: 0,
        questions: [],
        currQuestion: null
    }


    async componentDidMount() {
        await this.props.getQuests();
        await this.props.getCurrQuestion();
        this.setState({ questions: this.props.questions, currQuestion: this.props.currQuestion });
    }


    handleAnswerClick = answer => {
        // update the answer object and set it to the state
        answer.id = this.state.currQuestion.id;
        answer.isClicked = true;
        this.props.updateQuestion(answer);
        this.setState({ selectedAnswer: answer });
        if (this.state.selectedAnswer) {
            // checking if it's the same answer, not doing anything
            if (this.state.selectedAnswer.txt === answer.txt) return;
            let { selectedAnswer } = this.state;
            selectedAnswer.isClicked = false;
        }
    }


    handleNextClick = async () => {
        // checking by id if exist in the answered questions array and change it, or if not, push it
        if (this.state.selectedAnswer) {
            let { currQuestion } = this.state
            let { answeredQuestions } = this.state;
            let idx = answeredQuestions.findIndex(question => question.id === currQuestion.id)
            if (idx !== -1) answeredQuestions.splice(idx, 1, currQuestion);
            else answeredQuestions.push(currQuestion);


            // changing back the answered questions array,
            // and the currAnswer in the state with the updated ones
            this.setState({ answeredQuestions, selectedAnswer: null });


            // calculating score
            let answerIdx = this.state.currQuestion.answers.findIndex(answer => answer.txt === this.state.selectedAnswer.txt)
            if (answerIdx === this.state.currQuestion.correctOptIndex) {
                this.setState({ playerScore: this.state.playerScore + 10 });
            }


            // pass to the next question or the score page
            await this.props.getCurrQuestion(this.state.answeredQuestions.length);
            this.setState({ currQuestion: this.props.currQuestion });


            // checking if this is the last question, or the game still on after it
            if ((this.state.answeredQuestions.length + 1) === this.state.questions.length) {
                this.setState({ isLastQuestion: true })
            } else {
                // if doesn't exist selected answer we set it to the current question,
                // if it's null or if it's been chosen before
                if (this.state.currQuestion) {
                    let { selectedAnswer } = this.state.currQuestion;
                    this.setState({ selectedAnswer });
                }
            }
        }
    }


    handlePreviewClick = async () => {
        // getting back the preview curr question going down in array idx,
        // and set again the selected answer by the one that wes before
        await this.props.getCurrQuestion(this.state.answeredQuestions.length - 1);
        let { selectedAnswer } = this.state.answeredQuestions[this.state.answeredQuestions.length - 1];
        let { answeredQuestions } = this.state;
        answeredQuestions.pop();
        this.setState({
            currQuestion: this.props.currQuestion,
            selectedAnswer,
            playerScore: this.state.playerScore - 10,
            answeredQuestions
        })
    }


    handleRestart = async () => {
        this.setState({
            answeredQuestions: [],
            isLastQuestion: false,
            selectedAnswer: null,
            playerScore: 0,
            questions: [],
            currQuestion: null
        });
        await this.props.getQuests();
        await this.props.getCurrQuestion();
        this.setState({ questions: this.props.questions, currQuestion: this.props.currQuestion });
    }


    render() {
        let { currQuestion } = this.state;
        if (currQuestion) {
            var currAnswers = currQuestion.answers.map((answer, idx) => (
                <div className={`answer d-flex flex-column align-items-center ${(answer.isClicked) ? "clicked" : ""}`}
                    key={idx} onClick={() => this.handleAnswerClick(answer)}>
                    <h3>{answer.txt}</h3>
                </div>
            ))
        }
        return (
            <div className="game-board container text-center p-4">
                {currQuestion && <div>
                    <h1>Please answer the correct answer:</h1>
                    <div className="content">
                        <div className="question">
                            <h1>{currQuestion.txt}</h1>
                        </div>
                        <div className="answers d-flex flex-wrap justify-content-center">
                            {currAnswers}
                        </div >

                        <div className="btns d-flex justify-content-center">
                            <button className="prev btn btn-lg btn-primary m-5"
                                disabled={!this.state.answeredQuestions.length}
                                onClick={this.handlePreviewClick}>
                                Preview
                            </button>
                            <button className="next btn btn-lg btn-primary m-5"
                                onClick={this.handleNextClick}>
                                {this.state.isLastQuestion ? 'Done' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>}


                {!currQuestion && <div className="container text-center">
                    <div className="question d-flex flex-column align-items-center">
                        <h1>Your Score:</h1>
                        <h1>{this.state.playerScore}</h1>
                    </div>
                    <button className="btn btn-lg btn-primary m-5" onClick={this.handleRestart}>Play Again</button>
                </div>}
            </div>
        );
    }
}


const mapGameToProps = state => ({
    questions: state.gameReducer.items,
    currQuestion: state.gameReducer.item
})


export default connect(mapGameToProps, { getQuests, getCurrQuestion, updateQuestion })(GameBoard);

