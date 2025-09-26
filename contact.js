// Get elements
const form = document.getElementById('contactForm');
const successToast = document.getElementById('successToast');
const requiredFields = form.querySelectorAll('[required]');


requiredFields.forEach(input => {

    input.addEventListener('invalid', function (e) {
        e.preventDefault(); 
        
        if (input.id === 'email' && input.validity.typeMismatch) {
            input.setCustomValidity('Please enter a valid email address.');
        } else if (input.id === 'email' || input.id === 'name') {
            input.setCustomValidity(`Please fill out your ${input.id}. This field is required.`);
        } else {
            input.setCustomValidity("This field is required.");
        }
    });

    input.addEventListener('input', function () {
        input.setCustomValidity("");
    });
});

function showToast(message) {
    document.getElementById('toastMessage').textContent = message;
    successToast.classList.add('show-toast');

    setTimeout(() => {
        successToast.classList.remove('show-toast');
    }, 4000);
}


form.addEventListener('submit', function (event) {
    event.preventDefault();

    if(form.checkValidity()){
        showToast("Successfully submitted your message! We will contact you soon.");

        form.reset();
    } else {
        console.error("Form validation failed. Native error messages are displayed.");
    }
})
