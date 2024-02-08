const body = document.querySelector('body');
const changeButton = document.querySelector('.theme');

changeButton.addEventListener('click', function() {
    if(localStorage.getItem('themeName') === "dark") {
        localStorage.themeName = 'white';
        body.classList.remove('dark-theme')   
        body.classList.add('white-theme') 
    } else {
        body.classList.remove('white-theme') 
        localStorage.themeName = 'dark';
        body.classList.add('dark-theme') 
    }

})