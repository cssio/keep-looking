var main = function() {


    // Sticky Header

    $(window).on("scroll", function(e) {

        var offset = $('.bg').innerHeight() - $('.header').innerHeight() - $('.header').position().top;
                
        if ($(window).scrollTop() > offset ) {
            $('.header').addClass('is-sticky');
        } else {
            $('.header').removeClass('is-sticky');
        }

        console.log(offset)
          
    });

    // Navigation Mobile


    $(document).on('click', '.nav__btn', function(event) {
        event.preventDefault();
        if ($('html').is('.is-navOpen')) {
            $('html').removeClass('is-navOpen');
        }
        else {
            $('html').addClass('is-navOpen');
        }
    });



    // Navigation ScrollTo

    $(document).on('click', '.nav__link', function(event) {
        event.preventDefault();
        

        var target = $(this).attr('href'),
            targetPos = $('.header').innerHeight() + $('.header').position().top,
            targetOffset = $(target).offset().top - targetPos / 2;

        $('html').removeClass('is-navOpen');

        $('html, body').animate({ scrollTop: targetOffset }, 1000);


    });





    $(window).resize(wResize);
    $(document).scroll(wResize);
    wResize();

    girlWidth();
    $(window).resize(girlWidth);
    $(document).scroll(girlWidth);
    $(window).on('orientationchange', girlWidth());
    sliderInit();


    arrow();
    $(document).scroll(arrow);

    headerLinkActive();
    $(document).scroll(headerLinkActive);

    // $(".menu table").each(function(i) {
    //     if ($(this).has("tr.title")) {
    //         console.log("asdsada");
    //         var numCols = $(this).find('tr')[1].cells.length;
    //     } else
    //         var numCols = $(this).find('tr')[0].cells.length;
    //     if (numCols == 3) {
    //         $(this).find('td:nth-child(1)').css("width", "59%");
    //         $(this).find('td:nth-child(2)').css("width", "19%");
    //         $(this).find('td:nth-child(3)').css("width", "19%");
    //         $(this).find('th:nth-child(1)').css("width", "59%");
    //         $(this).find('th:nth-child(2)').css("width", "19%");
    //         $(this).find('th:nth-child(3)').css("width", "19%");
    //     } else {
    //         $(this).find('td:nth-child(1)').css("width", "59%");
    //         $(this).find('td:nth-child(2)').css("width", "39%");
    //         $(this).find('th:nth-child(1)').css("width", "59%");
    //         $(this).find('th:nth-child(2)').css("width", "39%");
    //     }
    // });

    $(".menu table").each(function(i) {
        var numCols = 2;
        $(this).find('tr').each(function(j) {
            k = $(this).find("td,th").length;
            if (k == 3) {
                numCols = 3;
                return false;
            }
        });
        if (numCols == 3) {
            $(this).find('td:nth-child(1)').css("width", "59%");
            $(this).find('td:nth-child(2)').css("width", "19%");
            $(this).find('td:nth-child(2).range').css("cssText", "width: 19% !important");
            $(this).find('td:nth-child(3)').css("width", "19%");
            $(this).find('th:nth-child(1)').css("width", "59%");
            $(this).find('th:nth-child(2)').css("width", "19%");
            $(this).find('th:nth-child(3)').css("width", "19%");
        } else {
            $(this).find('td:nth-child(1)').css("width", "59%");
            $(this).find('td:nth-child(2)').css("width", "39%");
            $(this).find('th:nth-child(1)').css("width", "59%");
            $(this).find('th:nth-child(2)').css("width", "39%");
        }
    });

    $("#burger .button").click(function() {
        var height = $("#burger .menu").css("height");
        $("#burger .button").toggleClass("active");
        if ($("#burger .button").hasClass("active")) {
            $("#burger .menu").fadeIn();
            $("html,body").css("overflow", "hidden");
            $("#burger .logo").css("background", "#B0BDC6");
            $("#burger .logo").css("transition-delay", "400ms");
        } else {
            $("#burger .menu").fadeOut();
            $("html,body").css("overflow", "visible");
            $("#burger .logo").css("background", "transparent");
            $("#burger .logo").css("transition-delay", "0s");

        }
        // if (height == "470px") {
        //     $("#burger .menu").fadeOut("slow");
        //     $("#burger .menu").css({
        //         "width": "0",
        //         "height": "0"
        //     });
        //     $("#burger .button").css({
        //         "top": "0px",
        //         "right": "10px",
        //         "font-size": "3em"
        //     });
        // } else {
        //     $("#burger .menu").fadeIn("slow");
        //     $("#burger .menu").css({
        //         "width": "100%",
        //         "height": "470px",
        //         "padding-left": "0"
        //     });
        //     $("#burger .button").css({
        //         "top": "-4px",
        //         "right": "-17px",
        //         "font-size": "2.7em",
        //         "padding-left": "30px"
        //     });
        // }
    });

    $("#burger .menu li a").click(function() {
        $("html,body").css("overflow", "visible");
        $("#burger .menu").fadeOut();
        $("#burger .logo").css("background", "transparent");
        $("#burger .logo").css("transition-delay", "0s");

        $("#burger .button").removeClass("active");


        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body, html').animate({ scrollTop: top }, 1000);


    });


    baron({
        scroller: '.scroller',
        container: '.container',
        bar: '.scroller__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging',
        direction: 'h',
        impact: 'scroller'
    });

    $(".wrapper .main-nav a, .btn[href='#services'],.btn[href='#contacts']").click(function(event) {
        event.preventDefault();
        if (!$(this).hasClass("logo") && !$(this).hasClass("telegram-btn") && !$(this).hasClass("map-view") && !$(this).hasClass("instagram-view")) {
            var id = $(this).attr('href'),
                top = $(id).offset().top - 100;
            $('body, html').animate({ scrollTop: top }, 1000);
        } else
            $('body, html').animate({ scrollTop: 0 }, 1000);

    });


    $(document).scroll(fixed);
    fixed();



    $("#services .main-nav a").click(function(e) {
        e.preventDefault();
        $("#services .main-nav a").removeClass("active");
        $(this).addClass("active");
        var x = $(this).index();
        girlChangePC(x);
        girlWidth();
    });

    $('ul.menu li > p').click(function() {
        if (!$(this).hasClass('active')) {
            // $('ul.menu li > p').removeClass('active').next('div').slideUp(600);
            $(this).addClass('active');
            $(this).next('div').slideDown(600);
        } else
            $(this).removeClass('active').next('div').slideUp(600);
    });



}


var fixed = function() {
    var ht = $("header").height();

    if ($(document).scrollTop() >= (ht - 200)) {
        $(".wrapper").addClass("fixed");

    } else {

        $(".wrapper").removeClass("fixed");
    }

}

var headerLinkActive = function() {
    // alert("LOL");
    // if ($(document).scrollTop() >= ($(window).height() - 500))
    //     $("#top").fadeIn();
    // else
    //     $("#top").fadeOut();
    var top = $(document).scrollTop();
    $(".wrapper .main-nav a").each(function() {
        if (!$(this).hasClass("logo")) {
            var id = $(this).attr('href'),
                offset = $(id).offset().top - 200;
            if (offset <= top) {
                $(".wrapper .main-nav a").removeClass("active");
                $(this).addClass("active");
            } else
                $(this).removeClass("active");
        }
    });
}

var wResize = function() {
    // if ($(window).width() <= 980) {
    //     $("header").css("height", $(".bg").height());
    // } else {
    //     $("header").css("height", "100vh");
    // }

    var hImg = $(".girl").height(),
        sl = $(".scroll-bg").offset().left,
        sr = $(".scroll-bg").offset().left;
    ww = -$(window).width() + $("#price .wrap").width();

    if ($(window).width() < 770) {
        $(".container").css("margin-left", sl);
        $(".img-5").css("padding-right", sr);
        $("ul.menu li>div").css("width", "100vw");
        $("ul.menu li>div").css("margin-left", (ww / 2));
    } else {
        $(".container").css("margin-left", sl);
        $(".img-5").css("padding-right", sr);
        $("ul.menu li>div").css("width", "100%");
        $("ul.menu li>div").css("margin-left", "0");
    }


    if ($(window).width() < 1411 && $(window).width() > 1130) {
        $("#services").css("height", "50vw");
    } else if ($(window).width() > 770) {
        $("#services").css("cssText", "height: 573px !important");
    }

    if ($(window).width() < 1411 && $(window).width() > 950) {
        $("#contacts").css("height", "50vw");
        $("#map, #contacts .right").css("height", "50vw");
    } else if ($(window).width() > 1411) {
        $("#contacts").css("height", "initial");
        $("#map, #contacts .right").css("cssText", "height: 800px !important");
    } else if ($(window).width() > 980) {
        $("#contacts").css("cssText", "height: 480px !important");
        $("#map, #contacts .right").css("cssText", "height: 480px !important");
    } else
        $("#contacts").css("cssText", "height: initial");


    if ($(window).width() < 770) {
        $("#services .left").css("cssText", "min-height: " + hImg + "px !important");
    } else
        $("#services .left").css("cssText", "min-height: initial");

}

var girlWidth = function() {
    // wid = $(".girl").width();
    // $(".girl").css("left", (-wid / 2));
    // $(".swiper-container2 .girl").css("left", "initial");
}

var sliderInit = function() {
    var mySwiper = new Swiper('.swiper-container2', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        onSlideChangeEnd: function(swiper) {
            girlChangeMobile(swiper.activeIndex);
            girlWidth();
            wResize();
        }
    });
}

var girlChangeMobile = function(dig) {
    switch (dig) {
        case 0:
            $(".swiper-container .swiper-slide").html("Брови и ресницы");
            break;
        case 1:
            $(".swiper-container .swiper-slide").html("Волосы");
            break;
        case 2:
            $(".swiper-container .swiper-slide").html("Макияж");
            break;
        case 3:
            $(".swiper-container .swiper-slide").html("Ногтевой сервис");
            break;
        case 4:
            $(".swiper-container .swiper-slide").html("Кабинет депиляции");
            break;
        case 5:
            $(".swiper-container .swiper-slide").html("Свадебные услуги");
            break;
    }
    girlChange(dig);
}

var girlChangePC = function(y) {
    $(".girl").attr("src", "imgs/services/" + (y + 1) + ".jpg");
    girlChange(y);
}

var girlChange = function(x) {
    switch (x) {
        case 0:
            $(".number").html("I");
            $(".service-name").html("Брови и ресницы");
            $(".desc").html("Взгляд - его глубина и притягательность, в паре с густыми и пушистыми ресницами, под сводом точно выверенной линии бровей, это ли не проводник в самое сердце вашей души? У нас вы можете подобрать: идеальную форму бровей, их правильное цветовое оформление, добавить необходимой выразительности взгляду, за счет- наращивания ресниц.");
            $(".service-price").html("от 1000");
            $(".service-time").html("30 - 120");
            break;
        case 1:
            $(".number").html("II");
            $(".service-name").html("Волосы");
            $(".desc").html("Волосы - их безупречное качество, великолепная текстура и естественность в укладке, составляют основу нашего стиля, делая его узнаваемым и неповторимым. Девушка Keep Looking олицетворяет лёгкость и любовь к жизни. Именно так можно описать работу наших стилистов. У нас вы можете сделать: укладку, стрижку и самые эффективные уходы.");
            $(".service-price").html("от 1200");
            $(".service-time").html("10 - 60");
            break;
        case 2:
            $(".number").html("III");
            $(".service-name").html("Макияж");
            $(".desc").html("Макияж - это не просто внешний образ, он должен бережно подчеркивать уникальность и очарование вашего лица, при этом быть абсолютно ненавязчивым. У нас вы можете сделать невесомый дневной и волнующий вечерний макияж, а также записаться на индивидуальный урок, чтобы перенести весь наш опыт и мастерство в вашу повседневную жизнь.");
            $(".service-price").html("от 1500");
            $(".service-time").html("20 - 90");
            break;
        case 3:
            $(".number").html("IV");
            $(".service-name").html("Ногтевой сервис");
            $(".desc").html("Кончики пальцев - это то, с чего начинается нежность. В своей работе мы используем лучшие средства с высоким содержанием питательных ингредиентов, чтобы ваша кожа оставалась невероятно нежной, а визит к нам всегда ассоциировался с полноценным спа-ритуалом. Естественность и лаконичность - именно на этом строится наша концепция красоты.");
            $(".service-price").html("от 500");
            $(".service-time").html("20 - 120");
            break;
        case 4:
            $(".number").html("V");
            $(".service-name").html("Кабинет депиляции");
            $(".desc").html("Депиляция, как спа-ритуал - мечта, которую мы воплотили в жизнь. Эта процедура не просто сделает вашу кожу гладкой, мягкой и нежной, она так же бережно сохранит загар, привезенный из любимых путешествий. Для вашего комфорта мы используем очень пластичные воски, которые позволяют безболезненно удалять даже самые короткие волоски, на любых типах кожи.");
            $(".service-price").html("от 500");
            $(".service-time").html("10 - 120");
            break;
        case 5:
            $(".number").html("VI");
            $(".service-name").html("Свадебные услуги");
            $(".desc").html("День свадьбы - один из самых необыкновенных и по-настоящему особенных моментов в жизни каждой девушки. Доверьте нам свое настроение, естественную и чистую красоту, а мы со свойственным нам профессионализмом воплотим вашу сказку в жизнь. Образ невесты - это состояние души, которое пройдет с вами сквозь несколько поколений и останется в памяти навсегда.");
            $(".service-price").html("от 6000");
            $(".service-time").html("от 60");
            break;
    }
}




var arrow = function() {
    if ($(document).scrollTop() > 0)
        $("#arrow").css("opacity", "0");
    else
        $("#arrow").css("opacity", "1");
}



$(document).ready(main);