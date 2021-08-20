/* toggle nav */
const btnOpen = document.querySelector(".nav-open");
const btnClose = document.querySelector(".nav-close");
const navList = document.querySelector(".nav-list");




btnOpen.addEventListener("click", function() {
    navList.classList.add("nav-list-open");
})
btnClose.addEventListener("click", function (){
    navList.classList.remove("nav-list-open");
})
navList.addEventListener("click", function(){
    navList.classList.remove("nav-list-open");
})
 

/* fix nav */
const toggleOntop = document.querySelector(".toggle-ontop")
const navBar = document.getElementById("nav")
window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    
    

    if(scrollHeight > 100){
        toggleOntop.classList.add("show-toggle-ontop")
        
        
    } else {
        toggleOntop.classList.remove("show-toggle-ontop")
        
        
    }


    /* fix nav bar */
    if(scrollHeight > navHeight){
        navBar.classList.add("fixed-nav");
    } else {
        navBar.classList.remove("fixed-nav");
    }

    /* chang font color */
    
    

})

/*select link */
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(function(link){
    link.addEventListener("click", function(e){
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        //calculate the heights
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = navList.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        
        if(!fixedNav){
            position = position - navHeight;
            
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        navList.style.height = 10;
    });
});
