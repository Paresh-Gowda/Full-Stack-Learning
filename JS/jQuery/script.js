$("h1").addClass("title");
$("button").html("<em>Spam Button</em>")
$("a").attr("href","https://yahoo.com");
$("button").click(function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
$(document).keypress(function(event) {
    $("h1").text(event.key);
});