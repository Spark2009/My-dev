

let projects=document.querySelector('.projects-div');

function show_projects() {
  projects.hidden=false;
}
function hide_projects() {
  projects.hidden=true;
}
let auth=firebase.auth();
  auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    var uid = user.uid;
        document.querySelector('.login').hidden=true;    
        document.querySelector('.sign-up').hidden=true;
        document.querySelector('.user-img').hidden=false;
        if (user.photoUrl) {
          document.querySelector('.user-img').src=photoUrl;
          
        }
    
    // ...
  } else {
    // User is signed out
    // ...
    document.querySelector('.login').click();    
    
  }
});
document.querySelector('.signout').addEventListener('click',(e)=>{
  e.preventDefault();
 firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log('nit')
});
})