const projectsButton=document.querySelector(".projects-button");
const projectsDropdown=document.querySelector(".projects-dropdown");

if(projectsButton && projectsDropdown){

projectsButton.addEventListener("click",function(e){

e.preventDefault();

projectsDropdown.classList.toggle("open");

if(projectsDropdown.classList.contains("open")){

const rect=projectsDropdown.getBoundingClientRect();
const screenWidth=window.innerWidth;

if(rect.right>screenWidth-20){

const shift=rect.right-(screenWidth-20);

projectsDropdown.style.transform=`translateX(-${shift}px)`;

}else{

projectsDropdown.style.transform="translateX(0)";

}

}

});

}

