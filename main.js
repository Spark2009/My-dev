let projects=document.querySelector('.projects-div');

function show_projects() {
  projects.hidden=false;
}
function hide_projects() {
  projects.hidden=true;
}

setTimeout(()=>{
  const user = firebase.auth().currentUser;
  console.log(user)
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/v8/firebase.User
  
  document.querySelector('.login').hidden=true;
  document.querySelector('.sign-up').hidden=true;
  
  // ...
} else {
  // No user is signed in.
  document.querySelector('.login').click();
}
},2000)
document.querySelector('.signout').addEventListener('click',(e)=>{
  e.preventDefault();
 firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log('nit')
});
})