let projects = document.querySelector('.projects-div');
let ai=document.querySelectorAll('.project');

window.addEventListener('scroll',()=>{   let int=new IntersectionObserver((entery,obj)=>{

     entery.forEach((ent)=>{
    let ele=ent.target;
    if (ent.intersectionRatio==1) {
      ele.classList.add('animate');
      
    } else {
      ele.classList.remove('animate');
    }
     })
   })
  
   int.observe(ai[0]);
   int.observe(ai[1]);
   int.observe(ai[2]);
})


function show_projects() {
  projects.hidden = false;
}

function hide_projects() {
  projects.hidden = true;
}


  if (user_info) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    var uid = user_info.uid;
    if (user_info.photoURL) {
      document.querySelector('.user-img').src = user_info.photoURL;

    }
    // ...
  } else {
    // User is signed out
    // ...

  }


