

// Smooth reveal animation

const sections = document.querySelectorAll(
"section"
);


const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},
{

threshold:0.15

}

);



sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);


});





// WhatsApp order buttons


const buttons = document.querySelectorAll(
".card button"
);


buttons.forEach(button=>{


button.addEventListener(
"click",
()=>{


window.open(
"https://wa.me/",
"_blank"
);


});


});





// Navbar shadow on scroll


window.addEventListener(
"scroll",
()=>{


const nav =
document.querySelector(".navbar");


if(window.scrollY>50){

nav.style.boxShadow =
"0 5px 25px rgba(0,0,0,.15)";

}

else{

nav.style.boxShadow =
"0 5px 20px rgba(0,0,0,.08)";

}


});
function sendOrder(){


let name =
document.getElementById("name").value;


let phone =
document.getElementById("phone").value;


let product =
document.getElementById("product").value;



let message =
"Namaste Vijaya Kumari Farms,%0A%0A"+
"Name: "+name+
"%0APhone: "+phone+
"%0AProduct: "+product;



window.open(
"https://wa.me/91XXXXXXXXXX?text="+message,
"_blank"
);


}