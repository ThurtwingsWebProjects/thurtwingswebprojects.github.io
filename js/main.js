document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Merci de votre intérêt ! Rendez-vous sur la page "Qui sommes-nous ?" pour en savoir plus.');
    });
});
