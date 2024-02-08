document.addEventListener('DOMContentLoaded', function() {
    const startModal = document.querySelector('.start-modal');
    const closeButton = document.querySelector('.close-button-modal');

    startModal.classList.add('open-modal')
    setTimeout(() => {
        startModal.classList.remove('open-modal')
    }, 3000)

    closeButton.addEventListener('click', () => {
        startModal.classList.remove('open-modal')
    })
    
}) 
