// Function to validate email and send response to backend
function EmailValidation(enteredEmail) {
    // Email validation
    let mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if(enteredEmail.value.match(mail_format)) {

        axios.post('http://localhost:5500', {
            enteredEmail: enteredEmail.value
        }).then(()=> {
            // Sweet alert popup if successful 
            Swal.fire(
                'Mail sent!',
                'Check your inbox, spam or promotions.',
                'success'
            )
        }).catch(()=> {
            // Sweet alert popup if not successful
            Swal.fire(
                'Mail invalid!',
                'Fill the correct mail'
            )
        })        
    } 
}

// Form data
const form = getElementById('message-form')

// EventListener to send email address
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = new FormData(form);
    EmailValidation(email);
});
