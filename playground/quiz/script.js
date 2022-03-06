const quizData = [
    {
        question: 'Who created African Giant album?',
        a: 'Wizkid',
        b: 'Davido',
        c: 'Kiss Daniel',
        d: 'Burna boy',
        correct: 'd'
    }, {
        question: 'Who is MR Eazi?',
        a: 'Singer',
        b: 'dancer',
        c: 'Construction worker',
        d: 'window cleaner',
        correct: 'a'
    }, {
        question: 'How many Countries are in Africa?',
        a: '1',
        b: '30',
        c: '54',
        d: '100',
        correct: 'c',
    }, {
        question: 'How many albums does Wizkid have?',
        a: '7',
        b: '4',
        c: '1',
        d: '10',
        correct: 'b'
    }, {
        question: 'What`s the most popular song from Tiwa Savage',
        a: 'Eminado',
        b: 'Ma lo',
        c: 'Sombody`s son',
        d: 'Koroba',
        correct: 'c'
    }, {

    }
];
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll('.answer');


/*
 *Keep track of the current question
 * @currentQuestion should be initialised at 0 represents the index
 */

let currentQuiz = 0;
let answer = undefined;
let score = 0;

/*
 * @loadQuiz() loads questions everytime we hit the submit button
 */

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

};
loadQuiz();

/*
 * @getSelected()
 *
 */

const getSelected = () => {
    let answer = undefined
    answerEls.forEach((answerEl) => {
       if(answerEl.checked) {
            answer = answerEl.id;
       }
    });

    return answer;
}

//Deselesct all answers before loading the nex question
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answerEl.checked = false;
        }
    })
}


submitBtn.addEventListener('click', e=>{
    //check to see the answer
    const answer = getSelected();
    if(answer){
        //check if we have the correct answer then increase the score
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length - 1 ){
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2> You've answered correctly ${score}/${quizData.length} 
            questions. </h2> <button onclick="location.reload()">Play Again!</button>`;

        }
    }




})