
let id = 1;

// questions array
const questions = [
    {
        id: id++, txt: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { txt: '<scripting>', isClicked: false },
            { txt: '<script>', isClicked: false },
            { txt: '<JavaScript>', isClicked: false },
            { txt: '<js>', isClicked: false }
        ],
        correctOptIndex: 1,
        selectedAnswer: null
    },
    {
        id: id++, txt: 'How do you write a conditional statement for executing some statements only if "i" is equal to 5?',
        answers: [
            { txt: 'if i==5 then', isClicked: false },
            { txt: 'if i=5 then', isClicked: false },
            { txt: 'if (i==5)', isClicked: false },
            { txt: 'if i=5', isClicked: false }
        ],
        correctOptIndex: 2,
        selectedAnswer: null
    },
    {
        id: id++, txt: 'How does a "for" loop start?',
        answers: [
            { txt: 'for (let i = 0; i', isClicked: false },
            { txt: 'for (i = 0; !', isClicked: false },
            { txt: 'for i = 1 to 5', isClicked: false },
            { txt: 'while (i', isClicked: false }
        ],
        correctOptIndex: 0,
        selectedAnswer: null
    },
    {
        id: id++, txt: 'You define an array using',
        answers: [
            { txt: 'var myarray = new Array();', isClicked: false },
            { txt: 'var myarray = array new;', isClicked: false },
            { txt: 'var new Array() = myarray;', isClicked: false },
            { txt: 'var new array = myarray;', isClicked: false }
        ],
        correctOptIndex: 0,
        selectedAnswer: null
    },
    {
        id: id++, txt: 'How do you round the number 8.25, to the nearest whole number?',
        answers: [
            { txt: 'Math.rnd(8.25)', isClicked: false },
            { txt: 'Rnd(8.25)', isClicked: false },
            { txt: 'Round(8.25)', isClicked: false },
            { txt: 'Math.round(8.25)', isClicked: false }
        ],
        correctOptIndex: 3,
        selectedAnswer: null
    },
    {
        id: id++, txt: 'How do you find the largest number of 6 and 8?',
        answers: [
            { txt: 'Top(6,8)', isClicked: false },
            { txt: 'Math.max(6,8)', isClicked: false },
            { txt: 'Ceil(6,8)', isClicked: false },
            { txt: 'Math.ceil(6,8)', isClicked: false }
        ],
        correctOptIndex: 1,
        selectedAnswer: null
    },
    {
        id: id++, txt: 'How long did Brendan Eich take to write the JavaScript programming language?',
        answers: [
            { txt: '10 days', isClicked: false },
            { txt: '2 weeks', isClicked: false },
            { txt: '2 months', isClicked: false },
            { txt: '10 months', isClicked: false }
        ],
        correctOptIndex: 0,
        selectedAnswer: null
    },
    {
        id: id++, txt: 'Who created JavaScript?',
        answers: [
            { txt: 'Microsoft', isClicked: false },
            { txt: 'Sun Microsystems', isClicked: false },
            { txt: 'Oracle', isClicked: false },
            { txt: 'Netscape', isClicked: false }
        ],
        correctOptIndex: 3,
        selectedAnswer: null
    },
    {
        id: id++, txt: 'Which of the following is not a reserved word in JavaScript?',
        answers: [
            { txt: 'default', isClicked: false },
            { txt: 'finally', isClicked: false },
            { txt: 'undefined', isClicked: false },
            { txt: 'throw', isClicked: false }
        ],
        correctOptIndex: 2,
        selectedAnswer: null
    },
    {
        id: id++, txt: 'How do you create a function named coolFunction?',
        answers: [
            { txt: 'function => coolfunction () {}', isClicked: false },
            { txt: 'function=coolFunction();', isClicked: false },
            { txt: 'function:coolFunction(){}', isClicked: false },
            { txt: 'function coolFunction () {}', isClicked: false }
        ],
        correctOptIndex: 3,
        selectedAnswer: null
    }
]



// get the questions
function getQuests() {
    questions.forEach(question => {
        question.answers.forEach(answer => {
            answer.isClicked = false;
        });
        question.selectedAnswer = null;
    });
    return Promise.resolve(questions);
}


// get single question
function getCurrQuestion(idx = 0) {
    return Promise.resolve(questions[idx]);
}


// update question
function updateQuestion(answer) {
    let question = questions.find(question => question.id === answer.id);
    question.selectedAnswer = answer;
    return Promise.resolve(question);
}


export default {
    getQuests,
    getCurrQuestion,
    updateQuestion
}