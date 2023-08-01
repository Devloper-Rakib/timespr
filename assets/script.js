/////////////////////////// NAVIGATION BAR BOX SHADOW CHANGE WITH SCROLL
var navbar = document.querySelector('nav')
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
    document.querySelector('nav').style.boxShadow = "0px 0px 10px #999";
  } else {
    navbar.classList.remove('scrolled')
    document.querySelector('nav').style.boxShadow = "0px 0px 0px";
  }
}
///////////////////////// NAVIGATION BAR BACKGROUND CHANGE WITH CLICK
function clickChange() {
  document.querySelector('nav').style.background = "#fff";
}


///////////////////////// NAV TOGGLER BAR
function changeMenuBar() {
  document.querySelector('top-bar').style.transform = "rotate(45deg)";
}


///////////////////////// AUTO COUNTER NUMBER

function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}
function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 1.5 seconds
      duration: 1500,
      easing: 'linear',
      step: function () {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function () {
        element.html(this.countNum + html);
      }
    });
  }
}
//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are
    //visible in the viewport
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  })
});




// /////////////BackToTopButton

var btn = $('#BackToTopButton');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});