// clicking on nav bar makes it move up
$("#navbar").one("click", function() {
    $("#start").animate({
        top: "0"
    }, 2000); 
});

// clicking on nav links causes them to be white and content to show
$("#nav-projects").click(function() {
    $("nav p").removeClass("selected");
    $(this).addClass("selected");
    $("section").css("display", "none");
    $("#projects").css("display", "block");
});
$("#nav-connect").click(function() {
    $("nav p").removeClass("selected");
    $(this).addClass("selected");
    $("section").css("display", "none");
    $("#connect").css("display", "block");
});
$("#nav-about").click(function() {
    $("nav p").removeClass("selected");
    $(this).addClass("selected");
    $("section").css("display", "none");
    $("#about").css("display", "block");
});
