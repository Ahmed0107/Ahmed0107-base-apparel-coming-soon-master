const btnJoin = document.getElementById('btnJoin');
const usrEmail = document.getElementById('usrmail');
const imgError = document.getElementById('img-error');
const validMsg = document.getElementById("valid-mail-msg");

// Validation pattern ==> Regular Expression  
const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validation(){

    if (usrEmail.value == "") {

        imgError.style.display = "initial"

    } else if (pattern.test(usrEmail.value)){
        imgError.style.display = "none"
        validMsg.style.display = "none"
        
        alert('Login successfully')
    }
     else {
        imgError.style.display = "none"
        validMsg.style.display = "initial"
       
    }// end of is else satatment
    
   
}// end of validation function

btnJoin.addEventListener('click', validation);

