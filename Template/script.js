//====== show menu ====//
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.add('show_menu')
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

const closebtn = document.getElementById('closeBtn');
closebtn.addEventListener('click', () => {
    nav = document.getElementById('nav-menu');
    nav.classList.remove('show_menu');
});


//====== Dark mode ====//
let darkmode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#theme_btn');

const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkMode', null);
}

if(darkmode === 'enabled'){
    enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {
    let darkmode = localStorage.getItem('darkMode');
    if(darkmode !== 'enabled'){
        enableDarkMode();
    }else {
        disableDarkMode();
    }
})

//===== modal js ===///
var modal = document.getElementById("modal");

var btn = document.getElementsByClassName("modal_btn");

var span = document.getElementsByClassName("close")[0];


for(var i=0; i<btn.length; i++){
    btn[i].onclick = function() {
      modal.style.display = "block";
    }

}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}