function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
/* Ida Start */ 
let toggleNavStatus = false; 

let toggleNav = function(){
 let getSidebar = document.querySelector(".nav-sidebar");
 let getSidebarUl = document.querySelector(".nav-sidebar ul");
 let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

 
if (toggleNavStatus === false) {
  getSidebarUl.style.visibility = "visible";
  getSidebar.style.width = "100%"; 
    
let arrayLength = getSidebarLinks.length; 
for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "1"; 
  } 
    
 toggleNavstatus = true;
         
}

    
else if (toggleNavStatus === true) {
    getSidebar.style.width = "0%"; 
    
let arrayLength = getSidebarLinks.length; 
for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "0";
  } 

 getSidebarUl.style.visibility = "hidden"; 
    
 toggleNavstatus = false;
         
     }
}

window.onload = function (){
  let btnToggleNav = document.getElementById(".btn-toggle-nav");
  btnToggleNav.addEventListener("click", e => {
  
    if(btnToggleNav.classList.contains("open")){
      btnToggleNav.classList.remove("open");   
   }else{
      btnToggleNav.classList.add("open");
    }
  });
  
  
};


/*Ida Slut*/
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
	},
	axisY: {
		title: "Reserves(MMbbl)"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "blue",
		legendText: "MMbbl = one million barrels",
		dataPoints: [      
			{ y: 600, label: "December" },
			{ y: 266455,  label: "Saudi" },
			{ y: 169709,  label: "Canada" },
			{ y: 158400,  label: "Iran" },
			{ y: 142503,  label: "Iraq" },
			{ y: 101500, label: "Kuwait" },
			{ y: 97800,  label: "UAE" },
			{ y: 80000,  label: "Russia" }
		]
	}]
});
chart.render();

}

function clickX()
{
  $(".validation").animate({ 'height': '16px' }, 500).show();
}

