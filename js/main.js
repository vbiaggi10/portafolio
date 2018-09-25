(function($) {
  "use strict";

  // Sticky Nav
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 200) {
      $(".scrolling-navbar").addClass("top-nav-collapse");
    } else {
      $(".scrolling-navbar").removeClass("top-nav-collapse");
    }
  });

  /* 
   One Page Navigation & wow js
   ========================================================================== */
  //Initiat WOW JS
  new WOW().init();

  // one page navigation
  $(".main-navigation").onePageNav({
    currentClass: "active"
  });

  $(window).on("load", function() {
    $("body").scrollspy({
      target: ".navbar-collapse",
      offset: 195
    });

    $(window).on("scroll", function() {
      if ($(window).scrollTop() > 200) {
        $(".fixed-top").addClass("menu-bg");
      } else {
        $(".fixed-top").removeClass("menu-bg");
      }
    });
  });

  // Slick Nav
  $(".mobile-menu").slicknav({
    prependTo: ".navbar-header",
    parentTag: "span",
    allowParentLinks: true,
    duplicate: false,
    label: ""
  });

  /* 
   MixitUp
   ========================================================================== */
  $("#portfolio").mixItUp();

  /* 
   Sticky Nav
   ========================================================================== */
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 200) {
      $(".header-top-area").addClass("menu-bg");
    } else {
      $(".header-top-area").removeClass("menu-bg");
    }
  });

  /* 
   SMOOTH SCROLL
   ========================================================================== */
  var scrollAnimationTime = 1200,
    scrollAnimation = "easeInOutExpo";

  $("a.scrollto").on("bind", "click.smoothscroll", function(event) {
    event.preventDefault();
    var target = this.hash;

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        scrollAnimationTime,
        scrollAnimation,
        function() {
          window.location.hash = target;
        }
      );
  });

  /* 
   Back Top Link
   ========================================================================== */
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $(".back-to-top").fadeIn(400);
    } else {
      $(".back-to-top").fadeOut(400);
    }
  });

  $(".back-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
    return false;
  });

  /* Nivo Lightbox
  ========================================================*/

  $(".lightbox").nivoLightbox({
    effect: "fadeScale",
    keyboardNav: true
  });

  /* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });

  /* 
   Page Loader
   ========================================================================== */
  $("#loader").fadeOut();
})(jQuery);

/* form contact
  ========================================================*/
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  document.querySelector("#submit").addEventListener("click", () => {
    if (!name && !email && !message) {
      alert("Por favor completa todos los campos");
    } else {
      sendMail(email.value, name.value, message.value);
      email.value = "";
      name.value = "";
      message.value = "";
    }
  });

  sendMail = (email, name, message) => {
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        key: "ZGiSDAUGJIgaCMIqm9ysPA",
        message: {
          from_email: name + "@laboratoria.la",
          to: [
            {
              email: "vbiaggi10@gmail.com",
              name: "Valeria Biaggi",
              type: "to"
            }
          ],
          autotext: "true",
          subject: "¡QUIERO CONTACTARME CONTIGO!",
          html:
            "Nombre: " + name + "   Correo: " + email + "   Mensaje:" + message
        }
      }
    }).done(response => {
      return response;
    });
  };
