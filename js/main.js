// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;
        nav.classList.toggle("active");

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
//  window.addEventListener("scroll", function () {
//      if (window.scrollY > 150) {
//          document.querySelector("#navbar").style.opacity = 0.99;
//      } else {
//          document.querySelector("#navbar").style.opacity = 1;
//      }
//  });


       window.onscroll = function() {scrollFunction()};

       function scrollFunction() {
       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
           document.getElementById("navbar").style.padding = "30px 10%";
           document.getElementById("logo").style.height = "80px";
           document.getElementById("navbar-items").style.top = "4.7875rem";
       } else {
           document.getElementById("navbar").style.padding = "70px 10%";
           document.getElementById("logo").style.height = "130px";
           document.getElementById("navbar-items").style.top = "8.5875rem";
       }
       }


       //Menu Mobile
    
       const nav = document.querySelector("#navbar");
       const btnMenu = document.querySelector(".btn-menu");
       const menu = document.querySelector("#navbar-items");
       
       function handleButtonClick(event){
           if(event.type === "touchstart") event.preventDefault();
           event.stopPropagation();
           nav.classList.toggle("active");
           handleClickOutside(menu, () => {
               nav.classList.remove("active");
               setAria();
           });
           setAria();
       }
       
       function handleClickOutside(targetElement, callback){
           const html = document.documentElement;
           function handleHTMLClick(event){
               if(!targetElement.contains(event.target)){
                   targetElement.removeAttribute("data-target");
                   html.removeEventListener("click", handleHTMLClick);
                   html.removeEventListener("touchstart", handleHTMLClick);
                   callback();
               }
           }
           if(!targetElement.hasAttribute("data-target")){
               html.addEventListener("click", handleHTMLClick);
               html.addEventListener("touchstart", handleHTMLClick);
               targetElement.setAttribute("data-target", "");
           }
       }
       
       function setAria(){
           const isActive = nav.classList.contains("active");
           btnMenu.setAttribute("aria-expanded", isActive);
           if(isActive){
               btnMenu.setAttribute("aria-label", "Fechar Menu");
           }else{
               btnMenu.setAttribute("aria-label", "Abrir Menu");
           }
       
       }
       
       btnMenu.addEventListener("click", handleButtonClick);
       btnMenu.addEventListener("touchstart", handleButtonClick);

       $('input.colorir').bind('focus blur',function(){
        $(this).toggleClass('input_colorido');
      });