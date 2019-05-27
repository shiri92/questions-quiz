import React, { Component } from 'react';
import {connect} from "react-redux";
import {getQuests, getCurrQuestion} from '../actions/gameActions';

// import GameService from '../services/GameService';

class GameBoard extends Component {
    state = {
        answeredQuestions: [],
        isLastQuestion: false,
        selectedAnswer: null,
        playerScore: 0
    }


    async componentDidMount() {
        this.props.getQuests();
        this.props.getCurrQuestion();
    }


    handleAnswerClick = answer => {
        // making an answer object by the answer that the user clicked and updating it in the state
        answer.id = this.props.currQuestion.id;
        answer.isClicked = true;
        if (this.state.selectedAnswer) {
            // checking if it's the same answer, not doing anything
            if(this.state.selectedAnswer.txt === answer.txt) return;
            let { selectedAnswer } = this.state;
            selectedAnswer.isClicked = false
            // } else {
                // this.setState({ selectedAnswer: answer });
            }
        this.setState({ selectedAnswer: answer });
    }


    handleNextClick = () => {
        // checking by id if exist in the answered questions array and change it, or if not, push it
        if (this.state.selectedAnswer) {
            let { selectedAnswer } = this.state
            let { answeredQuestions } = this.state;
            let idx = answeredQuestions.findIndex(question => question.id === selectedAnswer.id)
            if (idx !== -1) answeredQuestions.splice(idx, 1, selectedAnswer);
            else answeredQuestions.push(selectedAnswer);


            // changing back the answered questions array and the currAnswer in the state with the updated ones
            this.setState({ answeredQuestions: answeredQuestions, selectedAnswer: null });


            // checking if this is the last question, or the game still on after it
            if ((this.state.answeredQuestions.length + 1) === this.props.questions.length) {
                this.setState({ isLastQuestion: true })
            }


            // calculating score
            let answerIdx = this.props.currQuestion.answers.findIndex(answer => answer.txt === this.state.selectedAnswer.txt)
            if (answerIdx === this.props.currQuestion.correctOptIndex) {
                this.setState({ playerScore: this.state.playerScore + 10 });
            }


            // pass to the next question or the score screen
            this.props.getCurrQuestion(this.state.answeredQuestions.length);
            // this.setState({ currQuestion: GameService.getCurrQuestion(this.state.answeredQuestions.length) })
        }
    }


    handlePreviewClick = () => {
        console.log(this.state.selectedAnswer)
        // cut the answer from the answered questions array to let the player choose again
        let { answeredQuestions } = this.state;
        answeredQuestions.pop();
        this.setState({
            answeredQuestions: answeredQuestions,
            currQuestion: this.props.getCurrQuestion(this.state.answeredQuestions.length)
        })
    }


    render() {
        let { currQuestion } = this.props;
        if (currQuestion) {
            var currAnswers = currQuestion.answers.map((answer, idx) => (
                <div className={`answer d-flex flex-column align-items-center ${(answer.isClicked) ? "clicked" : ""}`}
                    key={idx} onClick={() => this.handleAnswerClick(answer)}>
                    <h3>{answer.txt}</h3>
                </div>
            ))
        }
        return (
            <div className="game-board p-5">
                {currQuestion && <div className="container content">
                    <div className="question">
                        <h1 className="text-center">{currQuestion.txt}</h1>
                    </div>
                    <div className="answers d-flex flex-wrap justify-content-center">
                        {currAnswers}
                    </div >

                    <div className="btns d-flex justify-content-center">
                        <button className="prev btn btn-primary m-5"
                            disabled={!this.state.answeredQuestions.length}
                            onClick={this.handlePreviewClick}>
                            Preview
                        </button>
                        <button className="next btn btn-primary m-5"
                            onClick={this.handleNextClick}>
                            {this.state.isLastQuestion ? 'Done' : 'Next'}
                        </button>
                    </div>
                </div>}


                {!currQuestion && <div className="container text-center">
                    <div className="question d-flex flex-column align-items-center">
                        <h1>Your Score:</h1>
                        <h1>{this.state.playerScore}</h1>
                    </div>
                </div>}
            </div>
        );
    }
}


const mapCatsToProps =  state => ({
    questions: state.gameReducer.items,
    currQuestion: state.gameReducer.item
})


export default connect(mapCatsToProps, {getQuests, getCurrQuestion })(GameBoard);

