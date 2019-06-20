
function onScroll(scrollHeight){
    
    $(".nav_item").each(function () {
        var tag = this.getAttribute("data-page");
        
        var refElement = $(tag);
        if (refElement.position().top <= scrollHeight+1 && refElement.position().top + refElement.height() > scrollHeight) {
            $(".nav_item").removeClass("nav_active");
            this.classList.add("nav_active");
        }
        else{
            this.classList.remove("nav_active");
        }
    });
}
