const first_button = document.querySelector('.btn_1');
const second_button = document.querySelector('.btn_2');
const third_button = document.querySelector('.btn_3');

first_button.addEventListener('click', function(){
    document.body.style.backgroundImage = "url('./kod_tekst_programmirovanie_146694_1920x1080.jpg')"
})

second_button.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./kod_programmirovanie_tekst_141192_1920x1080.jpg')"
})

third_button.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./kod_kody_dannye_133187_1920x1080.jpg')"
})