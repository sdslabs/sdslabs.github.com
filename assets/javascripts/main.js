$(window).scroll(function() {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    
    if ($(window).scrollTop() > 100) {
        $('body').addClass('nav-hidden');
    }

    else {
        $('body').removeClass('nav-hidden');
    }
});

$(".full img").click(function() {
  $(".full img").toggleClass('zoom');
});

$("img").each(function() {
    if ($this).attr("class") !== "nozoom") {
        this.setAttribute("data-action", "zoom");
    }
});
