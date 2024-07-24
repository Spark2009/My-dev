let db=firebase.firestore();
let auth=firebase.auth();
let name = document.querySelector('.name'),
phone=document.querySelector('.phone')
,gender=document.querySelector('.gender'),uid,users;

document.querySelector('.submit').addEventListener('click',(e)=>{
    e.preventDefault()
        db.collection("users").doc(uid).set({
          name:name.value,
          phoneNum:phone.value,
          gender:gender.value,
            email:users.email,
          emailVerified:users.emailVerified
        })
        
        db.collection("users").doc(uid). update({profile:true});
        alert('your profile is created');
      setTimeout(()=>{window.location.href='/index.html';},5000)
      
})
 auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        users=user;
        uid = user.uid;
        name.value = user.displayName;
        phone.value=user.phoneNumber;
        
        
      }})
