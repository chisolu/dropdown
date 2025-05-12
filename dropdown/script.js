let select = document.getElementById('select');
let list_ = document.getElementById('list');
let selectText = document.getElementById('p');
let inputfield = document.getElementById('inputfield');
let option = document.querySelectorAll('.option');
let searchfun = document.getElementById('search-fun');

function  newfun(){
    list_.classList.toggle('open');    
    searchfun.classList.toggle('search-fun-height');  
 }

// function selectState (boss){
//    inputfield.value = boss;
//  }


option.forEach(option => {
  option.addEventListener('click', ()=>{
    inputfield.value = option.innerHTML;  
    inputfield.style.backgroundColor = ('');
   })
});


// option.forEach(option => {
//   option.addEventListener('click', ()=>{
//     inputfield.placeholder = " search in " + option.innerHTML;  
//   })
// });


   