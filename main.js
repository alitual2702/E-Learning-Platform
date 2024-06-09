
// Courses Section
let btnsAll = document.querySelectorAll(".courses-all");
let tutorialCourses = document.querySelectorAll(".course-tutorial");

btnsAll.forEach((btnCourse, index) => {
  tutorialCourses.forEach((ele) => {
    let d = parseInt(ele.getAttribute("data-value"));
    if (d == 0) {
      tutorialCourses[0].style.display = "block";
    }
  });
  btnCourse.addEventListener("click", (e) => {
    tutorialCourses.forEach((ele) => {
      let d = parseInt(ele.getAttribute("data-value"));
    if(d === index){
        tutorialCourses.forEach((remove , remInd) =>{
            tutorialCourses[remInd].style.display = "none"
        })
        tutorialCourses[d].style.display = "block"
    }
    });

    btnsAll.forEach((removeClass) => {
      removeClass.classList.remove("active-course");
    });
    btnCourse.classList.add("active-course");
  });
});


// Navbar Section{
  let header = document.querySelector('header');
  let menuBarShow = document.querySelector('.menu-bar');
  let Navbar = document.querySelector('nav');


 window.addEventListener('resize' , responsiveMenu())
 function responsiveMenu(){
  if(header.style.width < "900px"){
    Navbar.classList.add('full-height')
  }else{
    Navbar.classList.remove('full-height')
  }
 }
 menuBarShow.addEventListener('click' , () =>{
      Navbar.classList.toggle('full-height')
  
 })
