let db=firebase.firestore();

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
    db.collection("users").doc(uid).update({
      emailVerified:user.emailVerified
    })
   db.collection("users").doc(uid).get().then((doc)=>{
     if (doc.exists) {
      let data= doc.data();
      if (!data.profile) {
        window.location.href='/profile.html'; 
      } else {
        if (!data.emailVerified) {
  document.querySelector('.email-vfy').hidden = false;
}
      }
      
     }else {
                  db.collection("users").doc(uid).set({
               profile: false
             })
             .then(() => {
               console.log("Document written with ID: ");
             })
             .catch((error) => {
               console.error("Error adding document: ", error);
             });
     }
     
   })

        document.querySelector('.login').hidden=true;    
        document.querySelector('.sign-up').hidden=true;
        document.querySelector('.user-img').hidden=false;
        if (user.photoURL) {
          document.querySelector('.user-img').src=user.photoURL;
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
function later() {
  document.querySelector('.email-vfy').hidden=true;
  // Tab to edit
}
function verify() {
  // Tab to edit
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
    alert('Please go G-mail app and verify your email');
  document.querySelector('.email-vfy').hidden=true;
  });
  alert('Please go G-mail app and verify your email');
  document.querySelector('.email-vfy').hidden=true;
}
