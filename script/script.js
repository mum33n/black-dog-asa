const toggler=document.getElementById("mobile-menu");

toggler.addEventListener('click', function(){
    toggler.classList.toggle('is-active')
})
var wow = new WOW();
wow.init();