
/* Ida Start */ 
let toggleNavStatus = false; 

let toggleNav = function(){
 let getSidebar = document.querySelector(".toggle-sidebar");
 let getSidebarUl = document.querySelector(".toggle-sidebar ul");
 let getSidebarLinks = document.querySelectorAll(".toggle-sidebar a");


 
if (toggleNavStatus === false) {
    console.log("Open nav");
  getSidebarUl.style.visibility = "visible";
  getSidebar.style.width = "100%"; 
    
let arrayLength = getSidebarLinks.length; 
for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "1"; 
  } 
 toggleNavStatus = true;
}

    
else if (toggleNavStatus === true) {
    console.log("Closed nav");
    getSidebar.style.width = "0%"; 
    
let arrayLength = getSidebarLinks.length; 
for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "0";
  } 

 getSidebarUl.style.visibility = "hidden"; 
    
 toggleNavStatus = false;
         
}
    burgerCross();
}

let btnToggleNav = document.getElementsByClassName("btn-toggle-nav");

function burgerCross() {
    
    btnToggleNav[0].classList.toggle("open");
    
//    if(btnToggleNav.classList.contains("open"))
//    {
//      btnToggleNav.classList.remove("open");   
//   }
//    else
//    {
//      btnToggleNav.classList.add("open");
//    }
  };


//window.onload = function (){
//  let btnToggleNav = document.getElementById(".btn-toggle-nav");
//  btnToggleNav.addEventListener("click", e => {
//  
//    if(btnToggleNav.classList.contains("open")){
//      btnToggleNav.classList.remove("open");   
//   }else{
//      btnToggleNav.classList.add("open");
//    }
//  });
//  
//  
//};


/*Ida Slut*/

/*Nicoline start*/
//array
let loginButton = document.getElementById("logindlogin");
console.log(loginButton);

const nummerplade = document.getElementById('nummerplade')
const password = document.getElementById('adgangskode')



loginButton.addEventListener("click", validation);


function validation (){
let nummerplade = document.getElementsByClassName('nummerplade')[0].value;   
let adgangskode = document.getElementsByClassName('adgangskode')[0].value;   
if(nummerplade=='') {
    
 document.getElementsByClassName('nummerplade')[0].placeholder = "Venligst indtast nummer";
    
    if (adgangskode == '') {
        document.getElementsByClassName('adgangskode')[0].placeholder = "Venligst indtast felterne";
    }
      
 }    
     else if (adgangskode == '') {
        document.getElementsByClassName('adgangskode')[0].placeholder = "Venligst indtast felterne";
    }
    
    else {
        location.href = "mycar.html";
    }
}

/*Nicoline slut*/

/* JONAS START*/

/* JONAS SLUT*/

 let image_tracker='udennummer';
function change(){
    let billede = document.getElementById ("nummerplade");
    if (image_tracker=='udennummer') {
        billede.src ='/img/nummerplade2.svg';
        image_tracker= 'mednummer';
    } else{
        billede.src = '/img/nummerplade.svg';
        image_tracker = 'udennummer'
    }
    
}
        

/* JOACHIM START*/



/* JOACHIM SLUT*/