const number_answers = document.querySelectorAll('.number');
const answer_counter = document.querySelector('.answer_counter');
const lose_modal = document.querySelector('.lose-modal');

const MAX_TRY = 5;
let try_count = 0;
let game_index = 0;

let right_answer = 0;
let wrong_answer = 0;

answer_counter.innerHTML = `Попыток: ${try_count}`

function randint(min, max) {
    return Math.round(Math.random() * (min - max) + max);
}

function shuffle(array) {
    let curr_index = array.length ,random_index;
    while(curr_index != 0) {
        random_index = Math.floor(Math.random() * curr_index);
        curr_index--;
        [array[random_index] ,array[curr_index]] = [
        array[curr_index],array[random_index]];
    }
    return array;
}

function checkTries(tryCount) {
    if(tryCount >= MAX_TRY) {
        loseWindow()
        try_count = 0;
        answer_counter.innerHTML = `Попыток: ${try_count}`
    }
    return tryCount;
}

function loseWindow() {
    return lose_modal.innerHTML = `
        <div class="inner-lose-modal">
            <div class="right-answer">Верные ответы: ${right_answer}</div>
            <button class="restart-button">Начать заново</button>
        </div>
    `
}

class Question {
    constructor() {
        this.answers = [
            randint(1, 100),
            randint(1, 100),
            this.correct = randint(1, 100),
            randint(1, 100),
        ]
        shuffle(this.answers);
    }
    display () {
        for (let i = 0; i < this.answers.length; i += 1) {
            number_answers[i].innerHTML = this.answers[i];
        }
    }
}

let current_question = new Question();
current_question.display();

for (let i = 0; i < number_answers.length; i++) {
    number_answers[i].addEventListener('click', function() {
        const { correct } = current_question
        if(number_answers[i].innerHTML === String(correct)) {
            number_answers[i].style.background = '#00FF00';
            setTimeout(() => {
                number_answers[i].style.background = ''
            },300);

            right_answer += 1;
            game_index += 1;
            current_question = new Question();
            current_question.display();

        } else {
            number_answers[i].style.background = 'rgb(255, 67, 67)';
            setTimeout(() => {
                number_answers[i].style.background = ''
            },300);

            wrong_answer += 1;
            try_count += 1;
            answer_counter.innerHTML = `Попыток: ${try_count}`;
            checkTries(try_count);

        }
    })
}