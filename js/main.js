// Ida (START)
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


// Ida (SLUT)

//Nicoline (START)
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
//Nicoline (SLUT)

//Jonas (START)
//Dette stykke gør at jeg kan toggle visse elementer fra og til.
var toggled = false;
			function toggle(){
                //Dette slår id'erne fra.
				if(!toggled){
					toggled = true;
					document.getElementById("a1").style.display = "none";
                    document.getElementById("a2").style.display = "none";
                    document.getElementById("a3").style.display = "none";
                    document.getElementById("a4").style.display = "none";
                    document.getElementById("a5").style.display = "none";
                    document.getElementById("a6").style.display = "none";
                    document.getElementById("a7").style.display = "none";
                    document.getElementById("a8").style.display = "none";
					return;
				}
                //Dette slår id'erne til igen.
				if(toggled){
					toggled = false;
					document.getElementById("a1").style.display = "grid";
                    document.getElementById("a2").style.display = "grid";
                    document.getElementById("a3").style.display = "grid";
                    document.getElementById("a4").style.display = "grid";
                    document.getElementById("a5").style.display = "grid";
                    document.getElementById("a6").style.display = "grid";
                    document.getElementById("a7").style.display = "grid";
                    document.getElementById("a8").style.display = "grid";
					return;
				}
			}
//Dette gør at knappen går fra aktiv til deaktiv.
 var image_tracker='dsaktiv';
function swap(){
    let billede = document.getElementById ("indikator");
    if (image_tracker=='dsinaktiv') {
        billede.src ='/img/icons/drivesafeaktiv.svg';
        image_tracker= 'dsaktiv';
    } else{
        billede.src = '/img/icons/drivesafedeaktiv.svg';
        image_tracker = 'dsinaktiv'
    }
    
}
//Jonas (SLUT)

//Joachim (START)

 var image_tracker='udennummer';
function change(){
    let billede = document.getElementById ("nummerboks");
    if (image_tracker=='udennummer') {
        billede.src ='/img/nummerplade2.svg';
        image_tracker= 'mednummer';
    } else{
        billede.src = '/img/nummerplade.svg';
        image_tracker = 'udennummer'
    }
    
}

var drinks = ["ginhass", "mojito", "Darknstormy"];
document.getElementById("cocktails").innerHTML=drinks[0]

//Joachim (SLUT)