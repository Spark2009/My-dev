let email=document.querySelector('.email');
let password=document.querySelector('.password');
let submit=document.querySelector('form');

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  try {
    let user =  firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
    alert('user');
  } catch (e) {
    alert('please enter correct info');
  }

 email.value="";
 password.value="";
  
})
