
let projects=document.querySelector('.projects-div');

function show_projects() {
  projects.hidden=false;
}
function hide_projects() {
  projects.hidden=true;
}


  
document.querySelector('.signout').addEventListener('click',(e)=>{
  e.preventDefault();
 auth.signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log('nit')
});
})
function later() {
  document.querySelector('.email-vfy').hidden=true;
  // Tab to edit
}
function verify() {
  // Tab to edit
  auth.currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
    alert('Please go G-mail app and verify your email');
  document.querySelector('.email-vfy').hidden=true;
  });
  alert('Please go G-mail app and verify your email');
  document.querySelector('.email-vfy').hidden=true;
}
