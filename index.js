const number_answers = document.querySelectorAll('.number');
const answer_counter = document.querySelector('.answer_counter');

const MAX_TRY = 5;
let try_count = 0
let game_index = 0;

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

class Question {
    constructor() {
        this.answers = [
            randint(1, 100),
            randint(1, 100),
            this.correct = randint(1, 100),
            randint(1, 100),
        ]
        shuffle(this.answers)
    }

    display () {
        for (let i = 0; i < this.answers.length; i += 1) {
            number_answers[i].innerHTML = this.answers[i]
        }
    }
}

let current_question = new Question()
current_question.display()

for (let i = 0; i < number_answers.length; i++) {
    number_answers[i].addEventListener('click', function() {
        if(number_answers[i].innerHTML === String(current_question.correct)) {
            number_answers[i].style.background = `#00FF00`
            setTimeout(() => {
                number_answers[i].style.background = ''
            },300)
            game_index = game_index + 1;
            current_question = new Question();
            current_question.display()
        } else {
            number_answers[i].style.background = 'rgb(255, 67, 67)'
            setTimeout(() => {
                number_answers[i].style.background = ''
            },300)
            try_count += 1
            answer_counter.innerHTML = `Попыток: ${try_count}`
            if(try_count >= MAX_TRY) {
                console.log("Попытки закончилсь")
                answer_counter.innerHTML = `Вы проиграли`;
            }
        }
    })
}





/* 
Добвить модальное окно "Начать заново"
Сделать модальное окно при закрытии страницы
Счетччик правильных ответов
*/ 