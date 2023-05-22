document.body.style.backgroundColor="#808080"
// Change the font color for h1 title tag to green
document.getElementById("title").style.color="green"
// Change the font case for h3 title tags to uppercase
// document.getElementById("vegetables").style.textTransform="uppercase"
var vegetables=document.querySelector("h3")
vegetables.style.textTransform="uppercase"
var fruits=document.getElementById("vegetables")
fruits.style.textTransform="uppercase"

//Add one more fruit to the fruits list
let newfruit=document.createElement("li");
newfruit.innerHTML="kiwi"
document.getElementById("fruList").appendChild(newfruit);
// adding vegetables
let newveg=document.createElement("li")
newveg.innerHTML="cabbage"
document.getElementById("vegList").appendChild(newveg)


