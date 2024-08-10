    const bingo_rules = [[0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]]

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    //let num_p=prompt('Enter number of player');
    let bingo = document.querySelectorAll('span')
    let btns = document.querySelectorAll('button');
    btns.forEach((ele) => {
     let rnum = Math.floor(Math.random() * nums.length);
     ele.innerHTML = nums[rnum];
     nums.splice(rnum, 1);
     ele.addEventListener('click', () => {
      let rule_true = 0;
      ele.style.background = '#000';
      ele.style.color = '#fff';
      ele.classList.add('cross');
      ele.style.textDecoration = "line-through";
      for (var i = 0; i < 12; i++) {
       // Tab to edit
       const rule = bingo_rules[i];
       const left_num = [];
       if (btns[rule[0]].classList[1] == btns[rule[1]].classList[1] && btns[rule[1]].classList[1] == btns[rule[2]].classList[1] && btns[rule[2]].classList[1] == btns[rule[3]].classList[1] && btns[rule[3]].classList[1] == btns[rule[4]].classList[1] && btns[rule[0]].className.search('cross') > 0) {
        rule_true++;
        if (rule_true == 1) {
         bingo[0].style.textDecoration = "line-through";
        } else if (rule_true == 2) {

         bingo[0].style.textDecoration = "line-through";
         bingo[1].style.textDecoration = "line-through";
        } else if (rule_true == 3) {
         bingo[0].style.textDecoration = "line-through";
         bingo[1].style.textDecoration = "line-through";
         bingo[2].style.textDecoration = "line-through";

        } else if (rule_true == 4) {
         bingo[0].style.textDecoration = "line-through";
         bingo[1].style.textDecoration = "line-through";
         bingo[2].style.textDecoration = "line-through";
         bingo[3].style.textDecoration = "line-through";

        } else if (rule_true == 5) {
         bingo[0].style.textDecoration = "line-through";
         bingo[1].style.textDecoration = "line-through";
         bingo[2].style.textDecoration = "line-through";
         bingo[3].style.textDecoration = "line-through";
         bingo[4].style.textDecoration = "line-through";
         let leftn = document.querySelector('.leftn');
         let win = document.createElement('h2');
         win.id = 'win';
         win.innerHTML = 'win';
         leftn.appendChild(win);
         setTimeout(() => {
          leftn.appendChild(win).remove();
          btns.forEach((bt) => {
           if (bt.className.search('cross') < 0) {
            let btn = document.createElement('button');
            btn.innerHTML = bt.innerHTML;
            leftn.appendChild(btn);
           }
          })
         }, 2000)

        } else {

        }
       }
      }


     });

    });
    bingo.forEach((sp) => {
     sp.addEventListener('click', () => {
      window.location.reload();
     });
    })
    
    let projects = document.querySelector('.projects-div');
   
    function show_projects() {
      projects.hidden = false;
    }
   
    function hide_projects() {
      projects.hidden = true;
    }

  if (user_info) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    if (use_info.photoURL) {
      document.querySelector('.user-img').src = user.photoURL;

    }
    // ...
  } else {
    // User is signed out
    // ...

  }
