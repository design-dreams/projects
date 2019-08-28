// clicking on nav links causes them to be white and content to show
$("#nav-projects").click(function() {
    $("nav p").removeClass("selected");
    $(this).addClass("selected");
    $("section").css("display", "none");
    $("#projects").css("display", "block");
});
$("#nav-certs").click(function() {
    $("nav p").removeClass("selected");
    $(this).addClass("selected");
    $("section").css("display", "none");
    $("#certs").css("display", "block");
});
$("#nav-about").click(function() {
    $("nav p").removeClass("selected");
    $(this).addClass("selected");
    $("section").css("display", "none");
    $("#about").css("display", "block");
});
