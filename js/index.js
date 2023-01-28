function appBarMenuOpen(menu){
    if (!appBarBackground) $(menu).parents(".container-fluid").addClass("app-bar-scroll-bg");
}

function appBarMenuClose(menu){
    if (!appBarBackground) $(menu).parents(".container-fluid").removeClass("app-bar-scroll-bg");
}

var appBarBackground = false;

function checkScroll(){
    var appBar = $(".app-bar");
    var h = appBar.height();
    if (scrollY > h && !appBarBackground) {
        appBar.parent().addClass("app-bar-scroll-bg");
        appBarBackground = true;
    } else if (appBarBackground && scrollY <= h) {
        appBarBackground = false;
        appBar.parent().removeClass("app-bar-scroll-bg");
    }
}
$(window).on("scroll", function(){
    checkScroll()
});

setTimeout(checkScroll, 10)

$(".overview-menu").on("click", "a", function(e){
    console.log(this)
    const anchor = $(this)
    const target = anchor.attr("href")
    const li = anchor.parent()

    if (li.hasClass("active")) return

    const lis = li.siblings()

    lis.removeClass("active")
    li.addClass("active")

    $("#easyquery, #localizer, #metroui").hide()
    $(target).show()

    e.preventDefault()
})