let name = document.querySelector('.name'),
  phone = document.querySelector('.phone'),
  gender = document.querySelector('.gender'),
   photo = document.querySelector('.photo-file');
   name.value = user_info.displayName;
    phone.value = user_info.phoneNumber;

  

img.addEventListener('click', () => { photo.click() })
photo.addEventListener('change', (e) => {
  let file = e.target.files[0];
  ref.child('img/' + user_info.displayName).put(file).then(() => {
    ref.child('img/' + user_info.displayName).getDownloadURL().then((url) => {
      img.src = url;
      photoURL = url;

    });
  })
})

document.querySelector('.submit').addEventListener('click', (e) => {
  e.preventDefault();
  
  try {

    user_doc.set({
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
