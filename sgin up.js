let email=document.querySelector('.email');
let password=document.querySelector('.password');
let submit=document.querySelector('form');
let google=document.querySelector('.google');

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  try {
    let user =  firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
    setTimeout(()=>{
      window.location.href='/Login.html';
    },1000);
  } catch (e) {
    alert('please enter correct info');
  }

 email.value="";
 password.value="";
  
})

google.addEventListener('click', () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
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

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    var uid = user.uid;
    window.location.href = "/index.html";


    // ...
  } else {
    // User is signed out
    // ...
    //document.querySelector('.login').click();    

  }
});