let email=document.querySelector('.email');
console.log(test)
let password=document.querySelector('.password');
let submit=document.querySelector('.submit'),forget=document.querySelector('.forget');
let google=document.querySelector('.loginwithgoogle');

submit.addEventListener('click',(e)=>{
  e.preventDefault();
  try {
    let user =  auth.signInWithEmailAndPassword(email.value, password.value);
    alert('Successfully login');
  } catch (e) {
    alert('Please enter correct email & password');
  }


  email.value="";
  password.value="";
})

google.addEventListener('click',()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  auth
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
})


  if (user_info) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User

            window.location.href="/index.html";

    
    // ...
  } else {
    // User is signed out
    // ...
    //document.querySelector('.login').click();    
    
  }

forget.addEventListener('click',()=>{
  if (!email.value=='') {
    auth.sendPasswordResetEmail(email.value);
    alert('Go your email and enter new password');
  } else {
    alert('Please enter correct email');
  }
})