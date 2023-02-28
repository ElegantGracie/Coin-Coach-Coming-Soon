// Function to validate email and send response to backend
function EmailValidation(email) {
    // Check for empty email field
    // if(!email || email.trim().length === 0) {
        // Sweet alert popup if email field is empty
    //     Swal.fire(
    //         'Email field is empty!',
    //         'Please fill in your email address.',
    //         'warning'
    //     );
    //     return;
    // }

    // Email validation
    let mail_format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mail_format)) {

        axios.post('https://coin-coach-mail-sender.onrender.com', {
            testerEmail: email
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
            // Sweet alert popup if API request fails
            Swal.fire(
                'Oops, something went wrong!',
                'Please try again later.',
                'error'
            );
        })            
    } else {
        // Sweet alert popup if not successful
        Swal.fire(
            'Mail invalid!',
            'Fill a valid mail',
            'error'
        )
    }
}

// Form data
const form = document.getElementById('message-form');


// EventListener to send email address
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('email')
    EmailValidation(email);
});
