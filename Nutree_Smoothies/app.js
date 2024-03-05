
 var tablinks = document.getElementsByClassName("tab-links");
 var tabcontents = document.getElementsByClassName("tab-contents");

          // Function to open a tab and update the active links and tab contents.
function opentab(event, tabname){
    for ( var tablink of tablinks){
         tablink.classList.remove("active-link");
    } 
    for (var tabcontent of tabcontents){
         tabcontent.classList.remove("active-tab");
    }
        
     event.target.classList.add("active-link");
     document.getElementById(tabname).classList.add("active-tab");
    }
 

  

 var sidemenu = document.getElementById("sidemenu");

 function openmenu()
 {
    sidemenu.style.right = "0";
 }

function closemenu()
{
   sidemenu.style.right = "-200px";
};
 


const scriptURL = 'https://script.google.com/macros/s/AKfycbwxllDy2Epljtu88zYHYM08Djn2S2b5H4_623Iz9KDHwu-OghIEAmJkHQhl8vjprRyBiQ/exec';
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

console.log(form);
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function() {
            msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
   });


// var typed = new Typed(".text", {
//     strings: ["Data Scientist","Data Analyst", "Web Developer", "Freelancer"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// })
