(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// function handleSubmit() {
//     const form = document.getElementById('contact-form');
//     const submitButton = document.getElementById('submit');
//     const successMessage = document.querySelector('.email-success');
//     const failureMessage = document.querySelector('.email-failure');
    
//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         submitButton.disabled = true;
//         submitButton.classList.add('waiting');
//         submitButton.querySelector('.btn-text').textContent = "Please wait...";

//         setTimeout(function() {
        
//             const isSubmissionSuccessful = Math.random() > 0.5;
        
//             successMessage.style.display = 'none';
//             failureMessage.style.display = 'none';
        
//             if (isSubmissionSuccessful) {
//                 successMessage.style.display = 'block';
//             }
//             else {
//                 failureMessage.style.display = 'block';
//             }

//             window.open('Resume.pdf', '_blank');
            
//             form.reset();
            
//             submitButton.disabled = false;
//             submitButton.querySelector('.btn-text').textContent = "Sent Message";
//             submitButton.classList.remove('waiting');
//         }, 2000);
//     });
// }

emailjs.init("1BCTNsdxSXCDSdeAj");

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit');
    const successMessage = document.querySelector('.email-success');
    const failureMessage = document.querySelector('.email-failure');

    submitButton.disabled = true;
    submitButton.classList.add('waiting');
    submitButton.querySelector('.btn-text').textContent = "Please wait...";

    emailjs.sendForm('service_henx82a', 'template_7sxt15s', form)
        .then(function(response) {
            successMessage.style.display = 'block';
            failureMessage.style.display = 'none';
            console.log("SUCCESS", response);

            form.reset();
            window.open('Resume.pdf', '_blank');
            submitButton.disabled = false;
            submitButton.querySelector('.btn-text').textContent = "Sent Message";
            submitButton.classList.remove('waiting');
        }, function(error) {
            successMessage.style.display = 'none';
            failureMessage.style.display = 'block';
            console.error("FAILED", error);

            submitButton.disabled = false;
            submitButton.querySelector('.btn-text').textContent = "Sent Message";
            submitButton.classList.remove('waiting');
        });
}

document.getElementById('contact-form').addEventListener('submit', handleSubmit);