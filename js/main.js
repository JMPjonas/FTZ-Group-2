
/* JONAS SLUT*/

/* JONAS SLUT*/
/* JOACHIM START*/

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

/* JOACHIM SLUT*/