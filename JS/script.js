const btnJoin = document.getElementById('btnJoin');
const usrEmail = document.getElementById('usrmail');
const imgError = document.getElementById('img-error');
const validMsg = document.getElementById("valid-mail-msg");

const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


function validation(){

    if (pattern.test(usrEmail.value)) {

        validMsg.style.display = "none"
        imgError.style.display = "none"
        alert('Login successfully')

    } else {

        validMsg.style.display = "initial"
        imgError.style.display = "initial"

    }
    
   
}
btnJoin.addEventListener('click', validation)

