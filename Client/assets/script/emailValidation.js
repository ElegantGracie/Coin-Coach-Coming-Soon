// Function to validate email and send response to backend
function EmailValidation(email) {
    // Email validation
    let mail_format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mail_format)) {

        axios.post('https://coin-coach-mail-sender.onrender.com', {
            testerEmail: testerEmail
        }).then((response)=> {
            console.log(response.data)
            // Sweet alert popup if successful 
            Swal.fire(
                'A mail will be sent to you',
                'Check your inbox, spam or promotions.',
                'success'
            );
        }).catch((error)=> {
            console.log(error)
            // Sweet alert popup if not successful
            Swal.fire(
                'Mail invalid!',
                'Fill a valid mail'
            )
        })        
    } 
}

// Form data
const form = document.getElementById('message-form');


// EventListener to send email address
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = form.email.value;
    EmailValidation(email);
});
