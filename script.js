$(document).ready(function(){
    $(window).scroll(function(){
        // sticky 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //images- funktioniert!
    var typed = new Typed(".typing", {
        strings: ["Studentin", "Hilfsassistentin Datenanalyse", "Mutter"],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
    });
});






{
    //funktioniert nicht - 

}