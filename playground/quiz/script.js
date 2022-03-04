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
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


/*
 *Keep track of the current question
 * @currentQuestion should be initialised at 0 represents the index
 */

let currentQuiz = 0;

/*
 * @loadQuiz() loads questions everytime we hit the submit button
 */

const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

};

submitBtn.addEventListener('click', e=>{
    currentQuiz++;
    if(currentQuiz < quizData.length - 1 ){
        loadQuiz();
    }else {
        alert("Well done, you've completed the quiz!")
        currentQuiz = 0;
        loadQuiz();
    }

})