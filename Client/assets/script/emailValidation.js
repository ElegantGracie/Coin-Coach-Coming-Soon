function confirm(){
    Swal.fire(
        'Mail sent!',
        'Check your inbox, spam or promotions.',
        'success'
    )    
}

function notSent(){
    Swal.fire(
        'Mail invalid!',
        'Fill the correct mail',
        // 'success'
      )    
}

function EmailValidation(enteredEmail) {
    let mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if(enteredEmail.value.match(mail_format)) {

        Swal.fire(
            'Mail sent!',
            'Check your inbox, spam or promotions.',
            'success'
        ) 

        // document.form1.text1.focus();

        return true;
    } else {

        notSent()

        // document.form1.text1.focus();

        return false;
    }

}

let submit = document.getElementById('button-addon2');
let email = document.getElementById('email');

submit.addEventListener('click', EmailValidation(email));
