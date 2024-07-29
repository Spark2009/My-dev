let db = firebase.firestore();
let auth = firebase.auth(),
  ref = firebase.storage().ref();
let name = document.querySelector('.name'),
  phone = document.querySelector('.phone'),
  gender = document.querySelector('.gender'),
  uid, users, photo = document.querySelector('.photo-file'),
  
  



img.addEventListener('click', () => { photo.click() })
photo.addEventListener('change', (e) => {
  let file = e.target.files[0];
  ref.child('img/' + users.displayName).put(file).then(() => {
    ref.child('img/' + users.displayName).getDownloadURL().then((url) => {
      img.src = url;
      photoURL = url;

    });
  })
})

document.querySelector('.submit').addEventListener('click', (e) => {
  e.preventDefault();
  
  try {

    db.collection("users").doc(uid).set({
      name: name.value,
      phoneNum: phone.value,
      gender: gender.value,
      emailVerified: users.emailVerified,
      profile: true
    })
      alert('your profile is created');
  setTimeout(() => { window.location.href = '/index.html'; }, 5000)
  } catch (e) {
    // Tab to edit
    console.log(e)
  }



})
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    users = user;
    uid = user.uid;
    name.value = user.displayName;
    phone.value = user.phoneNumber;




  }
})