fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data from backend:', data);
  });

function scrollToSection2(){
   const target = document.getElementById("ColorSection2");
   target.scrollIntoView({ behavior:"smooth"}); 
}
function scrollToSection3(){
   const target = document.getElementById("ColorSection3");
   target.scrollIntoView({ behavior:"smooth"}); 
}
