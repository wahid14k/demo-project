// let icon = document.getElementById("icon");

// icon.onclick = function(){
//    document.body.classList.toggle("darkMode");
//    if(document.body.classList.contains("darkMode")){
//       icon.src ="/sun.png";
//    }else{
//       icon.src="/moon.png"
//    }


// }



let darkMode =localStorage.getItem('darkMoad');

const icon =document.querySelector('#icon');

const enableDarkMode =()=>{
   document.body.classList.add("darkMode")
   localStorage.setItem("darkMode","enabled");

}
const disableDarkMode = () =>{
   document.body.classList.remove("darkMode");
   localStorage.setItem("darkMode",null);
}
if(darkMode === "enabled"){
   enableDarkMode();
}

icon.addEventListener('click',() =>{
   console.log('done');
   darkMode=localStorage.getItem("darkMode");

   if(darkMode !== "enabled"){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
})





