let email=document.querySelector('.email');
let password=document.querySelector('.password');
let submit=document.querySelector('.submit');
let google=document.querySelector('.loginwithgoogle');

submit.addEventListener('click',(e)=>{
  e.preventDefault();
  try {
    let user =  firebase.auth().signInWithEmailAndPassword(email.value, password.value);
    alert('Successfully login')
  } catch (e) {
    alert('Please enter correct email & password');
  }

  console.log(user)
  email.value="";
  password.value="";
})

google.addEventListener('click',()=>{
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