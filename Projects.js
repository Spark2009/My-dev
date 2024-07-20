let projects = document.querySelector('.projects-div');

function show_projects() {
  projects.hidden = false;
}

function hide_projects() {
  projects.hidden = true;
}
let auth = firebase.auth();
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    var uid = user.uid;
    if (user.photoURL) {
      document.querySelector('.user-img').src = user.photoURL;

    }
    // ...
  } else {
    // User is signed out
    // ...

  }
});