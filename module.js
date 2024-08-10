let scr_src=["https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js",
"https://www.gstatic.com/firebasejs/8.10.1/firebase-analytics.js",
"https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js",
"https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js",
"https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js",
"./init-firebase.js"];

let mic=document.querySelector('.mic');

let db,auth,app,analytics,user_info,
user_doc,
data,ref,scr_load=[-1];

const firebaseConfig = {
  apiKey: "AIzaSyBwUlv9eICqJgDcIFavtkl2d_4gtLQsyHk",
  authDomain: "spark-fc9b8.firebaseapp.com",
  projectId: "spark-fc9b8",
  storageBucket: "spark-fc9b8.appspot.com",
  messagingSenderId: "281329329937",
  appId: "1:281329329937:web:622f96c2300a509d6bceb0",
  measurementId: "G-0XPKMVX46E"
};


//setInterval(()=>{
//   date=new Date();
//    time=(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
//  },1000);

let speech=new SpeechSynthesisUtterance();
speech.lang="hi";
let voices = [];
window.speechSynthesis.onvoiceschanged=() =>{
  voices=window.speechSynthesis.getVoices();
speech.voice = voices[5];
}
var hi = localStorage.getItem('Come');
var name_input = false;
var password_input = false;
var password_change = false;
var new_password = false;
var name = localStorage.getItem('Name');
var password = localStorage.getItem('Password');
var Bgc = localStorage.getItem('Bgc');
let Bgpos = localStorage.getItem('Bgpos'),
 Bgp = false;
let calu, video_loop = false;
if (hi == null) {
 hi = 0;
}
if (name == null) {
 name = null;
}
if (password == null) {
 password = null;
}
if (Bgc == null) {

} else {

}
if (Bgpos == null) {
 Bgpos = 'Center';


}

	


mic.addEventListener('click',()=>{
  startConverting();
})

//functions


//Ai massage
/**
 * Write and show AI message
 * @param {String} text 
 */
function aimg(text) {
  // Tab to edit

    speech.text = text;
    window.speechSynthesis.speak(speech);
   

  
}

/**
 * This is AI brain
 */
function ait(meg) {
 // Tab to edit
 meg = String(meg).toUpperCase();
 var sEt = String(meg).slice(0, 8);
 if (!meg == '') {

  if (meg == 'HI' && hi == 0) {
   aimg('Hello');
   setTimeout(() => {
    aimg('I am AI (by Pratham vig)');
   }, 1000)
   setTimeout(() => {
    aimg('Who are you ?');
   }, 2000);
   hi = 1;
   name_input = true;
   localStorage.setItem('Come', hi);
  } else if (meg == 'HI' || meg == 'HELLO' || meg == '/1') {
   aimg('Hello');
   name = localStorage.getItem('Name');
   setTimeout(() => { aimg(name); }, 1000);

  } else if (meg == 'WHERE ARE YOU LIVING' || meg == '/2') {
   aimg('My first branch on New Delhi,India');

  } else if (meg == 'ARE YOU LIKE JARVIS' || meg == '/3') {
   aimg('Yes');
   setTimeout(() => {
    aimg('I am like JARVIS')
   }, 1000);
  } else if (meg == 'CALCULATE' || meg == '/4') {
   aimg('What would you want +,-,÷,×');
   calu = true;
  } else if (calu) {
   meg = meg.replace('×', '*');
   meg = meg.replace('÷', '/');
    aimg(eval(meg));

   calu = false;
  } else if (meg == 'DATE' || meg == 'TODAY' || meg == '/5') {
   aimg('Today ' + Date());
  } else if (name_input) {
   tname = String(meg).toLowerCase();
   tname = tname.replace(tname.slice(0, 1), tname.slice(0, 1).toUpperCase());
   //tname='Pratham Dev'; 
   typ.placeholder = 'Type.........';
   name_input = false;
   password_input = true;
   setTimeout(() => {
    aimg('Please enter password');
    typ.placeholder = 'Enter password'
    typ.type = 'password';
   }, 1000)
  } else if (meg == 'CHANGE MY NAME' || meg == '/6') {
   aimg('Ok , Please enter');
   typ.placeholder = 'Enter your name';
   name_input = true;
  } else if (password_input && password == null) {
   localStorage.setItem('Password', meg);
   aimg('Your are registed');
   typ.placeholder = 'Type.......';
   typ.type = 'text';
   localStorage.setItem('Name', tname);
   name = localStorage.getItem('Name');
   password = localStorage.getItem('Password');
   password_input = false;
  } else if (password_input && !password == '') {
   password = localStorage.getItem('Password');
   if (password == meg) {
    localStorage.setItem('Name', tname);
    aimg('Your name is changed');
    typ.placeholder = 'Type.......';
    typ.type = 'text';
    password_input = false;
   } else {
    aimg('Please enter correct password');
   }

  } else if (meg == 'CHANGE MY PASSWORD' || meg == '/7') {
   password_change = true;
   aimg('ok, Please enter');
   typ.placeholder = 'Enter your old password';
   typ.type = 'password';
  } else if (password_change) {
   password = localStorage.getItem('Password');
   if (password == meg) {
    aimg('Enter new password');
    typ.placeholder = 'enter new password';
    password_change = false;
    new_password = true;
   } else {
    aimg('Please enter correct password');


   }

  } else if (new_password) {
   localStorage.setItem('Password', meg);
   aimg('Your password changed');
   typ.placeholder = 'Type.......';
   typ.type = 'text';
   new_password = false;
  } else if (meg == 'GO ON TOP' || meg == '/9') {
   input.scrollBy(0, -999999);
  } else if (meg == 'GO ON BOTTOM' || meg == '/10') {
   input.scrollBy(0, 999999);
  } else if (meg == 'WHO IS YOUR DEVELOPER' || meg == '/8') {
   aimg('My developer is :-');
   setTimeout(() => {
    aimg('Pratham vig');
   }, 1100);
  } else if (meg == 'RESTART' || meg == '/18') {
   window.location.reload();
  } else if (meg == 'BGC' || meg == '/11') {
   var input_f = document.createElement('input');
   input_f.type = 'file';
   input_f.id = 'file';
   input_f.accept = 'imege/png';
   input_f.hidden = true;
   input_f.click();
   input_f.addEventListener('change', () => {
    localStorage.setItem('Bgc', URL.createObjectURL(input_f.files[0]));
    Bgc = localStorage.getItem('Bgc');
    body.background = Bgc;
    aimg('Your bg changed');
    meg = '';
   });
   /*  if (input_f.change) {
      aimg('Your bg changed');
      
     } else {
      aimg('Please retry');
     }*/
   input.appendChild(input_f);
   input.scrollBy(0, 999999999999);
  } else if (meg == 'BGP' || meg == '/12') {
   aimg('Please enter p');
   typ.placeholder = 'Left for L';
   let Bgpd = 0,
    s = setInterval(() => {
     if (Bgpd == 1) {
      typ.placeholder = 'Right for R';

     } else if (Bgpd == 2) {
      typ.placeholder = 'Top for T';

     } else if (Bgpd == 3) {
      typ.placeholder = 'Bottom for B';

     } else if (Bgpd == 0) {
      typ.placeholder = 'Left for L';

     } else {
      Bgpd = -1;
     }
     setTimeout(() => {
      clearInterval(s);
      typ.placeholder = 'Type......';

     }, 5000)
     Bgpd++;
    }, 500);
   Bgp = true;
  } else if (Bgp) {
   if (meg == 'L') {
    Bgpos = 'Left';
   } else if (meg == 'R') {
    Bgpos = 'Right';
   } else if (meg == 'T') {
    Bgpos = 'Top';
   } else if (meg == 'B') {
    Bgpos = 'Bottom';

   } else {

   }
   body.style.backgroundPosition = Bgpos;
   aimg('Bgp is ' + Bgpos);
   localStorage.setItem('Bgpos', Bgpos);
   Bgp = false;

  } else if (meg == 'GAME' || meg == '/13') {
   aimg('Ai games:-')
   var ul = document.createElement('ul');
   ul.style.backgroundColor = 'white';
   ul.style.borderRadius = '10px';
   ul.style.marginRight = '200px';
   setTimeout(() => {
    helplist('Tic-Tac-Tio', ul);
    helplist('Bingo', ul);
    input.scrollBy(0, 500);


   }, 1100);
   input.appendChild(ul);
  } else if (meg == 'Tic-Tac-Toc' || meg == '/13/1') {
   iframe.src = '/tic.html';
   aimg('Tic-Tac-Toe opened');
   setTimeout(() => { ifr.hidden = false; }, 1000);

  } else if (meg == 'BINGO' || meg == '/13/2') {
   iframe.src = '../Bingo.html';
   aimg('Bingo opened');
   setTimeout(() => { ifr.hidden = false; }, 1000);

  } else if (meg == 'PLAY SONG' || meg == '/14') {

   var input_f = document.createElement('input');
   input_f.type = 'file';
   input_f.id = 'file';
   input_f.hidden = true;
   input_f.click();
   input_f.addEventListener('change', () => {
    video.src = URL.createObjectURL(input_f.files[0]);
    video.play();
    aimg('Your song played');
   });
   input.appendChild(input_f);
   input.scrollBy(0, 999999999999);
  } else if (meg == 'STOP SONG' || meg == '/15') {
   video.pause();
   aimg('song stoped');

  } else if (meg == 'LOOP SONG' || meg == '/16') {
   aimg('On for N /off for F  ');
   video_loop = true;
  } else if (video_loop) {
   if (meg == 'N') {
    video.loop = true;
    aimg('Your song is looped');

   } else {
    video.loop = false;
    aimg('Your song is unlooped');
   }
   video_loop = false;

  } else if (meg.search('OPEN') >= 0 || meg.search('/17') >= 0) {
   let web = meg.replace('OPEN', '');
   if (web == 'YOUTUBE' || meg == 'YT' || meg == '/17/1') {
    aimg('Youtube opend');
    iframe.src = 'https://www.youtube.com/';
    setTimeout(() => { ifr.hidden = false; }, 1000);

   } else {
    aimg('What would want to open');
    var ul = document.createElement('ul');
    ul.style.backgroundColor = 'white';
    ul.style.borderRadius = '10px';
    ul.style.marginRight = '200px';
    setTimeout(() => {
     helplist('Youtube', ul);
     input.scrollBy(0, 500);


    }, 1100);
    input.appendChild(ul);
   }
  } else if (meg == 'LOGOUT' || meg == '/19') {
   localStorage.clear();
   window.location.reload();
  } else if (meg == 'BEY') {
    aimg('bey');
    setTimeout(()=>{
  window.history.back();
    },1000)
  } else if (meg == 'HELP' || meg == '/') {
   aimg('Ai command:-')
   var ul = document.createElement('ul');
   ul.style.backgroundColor = 'white';
   ul.style.borderRadius = '10px';
   ul.style.marginRight = '200px';
   setTimeout(() => {
    helplist('Hi', ul);
    helplist('Where are you living', ul);
    helplist('Are you like Jarvis', ul);
    helplist('Calculate', ul);
    helplist('Date', ul);
    helplist('Change my name', ul);
    helplist('Change my password', ul);
    helplist('Who is your developer', ul);
    helplist('Go on top', ul);
    helplist('Go on bottom', ul);
    helplist('Bgc', ul);
    helplist('Bgp', ul);
    helplist('Game', ul);
    helplist('Play song in bg', ul);
    helplist('Stop song', ul);
    helplist('Loop song', ul);
    helplist('Open', ul);
    helplist('Restart', ul);
    helplist('Logout', ul);
    input.scrollBy(0, 500);


   }, 1100);
   input.appendChild(ul);
  } else {
   aimg('Please enter correct message')
  }
  
 } else {
  alert('please meg');
 }

}
/**
 * its make list message
 * @param {String} text
 * @param {HTMLUListElement} ul
*/
function helplist(text, ul) {
 // Tab to edit
 var li = document.createElement('li');
 li.innerHTML = text;
 ul.appendChild(li);
return li
}

// Tab to edit
if (hi == 0) {
 aimg('Hello');
 setTimeout(() => {
  aimg('I am AI');
 }, 1000)
 setTimeout(() => {
  aimg('Who are you ?');
  typ.placeholder = 'Enter your name';
 }, 2000);
 hi = 1;
 name_input = true;
 localStorage.setItem('Come', hi);
 name = localStorage.getItem('Name');
} else if (hi == 1) {
 aimg('Welcome back');
 setTimeout(() => { aimg(name); }, 1000);
}





 function startConverting() {

  if ('webkitSpeechRecognition' in window) {
    var speechRecognizer = new webkitSpeechRecognition();
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = 'en-US';
    speechRecognizer.start();

    var finalTranscripts = '';

    speechRecognizer.onresult = function(event) {
      var interimTranscripts = '';
      for (var i = event.resultIndex; i < event.results.length; i++) {
        var transcript = event.results[i][0].transcript;
        transcript.replace("\n", "<br>");
        if (event.results[i].isFinal) {
          finalTranscripts += transcript;
        } else {
          interimTranscripts += transcript;
        }
      }
      ait(finalTranscripts);
    };
    speechRecognizer.onerror = function(event) {

    };
  } else {
   
  }
}

 function scr() {
  scr_src.forEach((value,i)=>{
    
    let script=document.createElement('script') ;
    script.defer=true;
    script.src=value;
    document.head.append(script);
    script.addEventListener('load',()=>{
      scr_load.push(i);
if (scr_load.length==scr_src.length) {
  app=firebase.initializeApp(firebaseConfig);
  analytics = firebase.analytics(app);
  auth=firebase.auth();
db=firebase.firestore();



auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
   user_info = user;
   if (user_info.photoURL) {
      document.querySelector('.user-img').src = user_info.photoURL;

    }
    user_doc=db.collection("users").doc(user_info.uid);

user_doc.get().then((doc) => {
  if (doc.exists) {
    data = doc.data();


  } else {
    user_doc.set({
        profile: false,
      })
      .then(() => {
        console.log("Document written with ID: ");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

})
   

    // ...
  } else {
    // User is signed out
    // ...
    // document.querySelector('.login').click();    

  }
});

//variables




}



    })
    
  })
}
scr()
