$(document).ready(function(){



    //////////
    // BARBA PJAX
    //////////

    Barba.Pjax.Dom.containerClass = "barba-container";

    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },

        fadeOut: function() {
            return $(this.oldContainer).animate({ opacity: .5 }, 200).promise();
        },

        fadeIn: function() {

            var _this = this;
            var $el = $(this.newContainer);

            $(this.oldContainer).hide();


            $el.css({
                visibility : 'visible',
                opacity : .5
            });

            $el.animate({ opacity: 1 }, 200, function() {
                document.body.scrollTop = 0;
                _this.done();
            });



        }
    });

    Barba.Pjax.getTransition = function() {
        return FadeTransition;
    };

    Barba.Prefetch.init();

    Barba.Pjax.start();

    Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, newPageRawHTML) {

        var response = newPageRawHTML.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', newPageRawHTML);
        var bodyClasses = $(response).filter('notbody').attr('class');
        $('html').removeClass();
        $('body').attr('class', bodyClasses);


        init();

        // pageReady();

        // initMap()

        // close mobile menu
        // if ( _window.width() < bp.mobile ){
        //   closeMobileMenu();
        // }

    });



    // --------------------------------------------------------------------------
    // Functions Init
    // --------------------------------------------------------------------------
    

    function init() {

        sticky();
        triggers();
        formSelect();
        initMap();

        carousels();
        carouselsGrid();

    }


    init();


    // --------------------------------------------------------------------------
    // Functions :: Sticky Header
    // --------------------------------------------------------------------------


    function sticky() {
        $(window).on("scroll", function(e) {
                
            if ($(window).scrollTop() > 0) {
                $('.header').addClass('is-sticky');
            } else {
                $('.header').removeClass('is-sticky');
            }
              
        });
    }

    // --------------------------------------------------------------------------
    // Functions :: Triggers
    // --------------------------------------------------------------------------

    function triggers() {

        // Filter
        $(document).on('click', '.filter__btn', function(event) {
            event.preventDefault();
            if ($(this).is('.is-active')) {
                $(this).removeClass('is-active');
                $('.filter__dropdown').slideUp('fast');
            }
            else {
                $(this).addClass('is-active');
                $('.filter__dropdown').slideDown('fast');
            }
        });


        // Accordion

        $('.js-accordion').find('dt').first().addClass('is-active').next('dd').slideDown('fast');

        $('.js-accordion').on('click', 'dt', function(event) {
            event.preventDefault();
            if ($(this).is('.is-active')) {
                $(this).removeClass('is-active').next('dd').slideUp('fast');
            }
            else {
                $('.js-accordion').find('dt').removeClass('is-active').next('dd').slideUp('fast');
                $(this).addClass('is-active').next('dd').slideDown('fast');
            }
        });


        // Navigation

        $(document).on('click', '.nav__btn', function(event) {
            event.preventDefault();
            if ($('html').is('.is-navOpen')) {
                $('html').removeClass('is-navOpen');
            }
            else {
                $('html').addClass('is-navOpen');
            }
        });

    }

    // --------------------------------------------------------------------------
    // Functions :: Select
    // --------------------------------------------------------------------------

    function formSelect() {

        $('.ui-select').styler({
            selectSmartPositioning: false,
            selectSearch: false,
            selectVisibleOptions: 0,
            selectSearchLimit: 6
        });

    }


    // --------------------------------------------------------------------------
    // Functions :: Map
    // --------------------------------------------------------------------------


    function initMap() {


        $(document).on('click', '.js-map-open', function(event) {
            event.preventDefault();
           $('html').addClass('is-mapOpen')
        });

        $(document).on('click', '.js-map-close', function(event) {
            event.preventDefault();
           $('html').removeClass('is-mapOpen')
        });

        if ($('#map').length) {

            var map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 55.767634, lng: 37.620407 },
                zoom: 17,
                styles: [{ "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#f0f1d9" }] }, { "featureType": "poi.school", "elementType": "geometry.fill", "stylers": [{ "color": "#f0f1d9" }] }, { "featureType": "poi.school", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.sports_complex", "elementType": "geometry.fill", "stylers": [{ "color": "#f0f1d9" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#e9e9e9" }, { "weight": 0.5 }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "color": "#c0c0c0" }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#969696" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#4f8abe" }, { "lightness": 70 }] }],
                disableDefaultUI: true
            });
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(55.767694, 37.620407),
                map: map,
                icon: {
                    url: "img/point.svg",
                    scaledSize: new google.maps.Size(8, 22)
                }
            });

        }

    }



    // --------------------------------------------------------------------------
    // Functions :: Carousel
    // --------------------------------------------------------------------------

    function carousels() {


        // Carousels

        $('.js-carousel').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,

            responsive: [
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        dots: false
                    }
                }

            ]
        });


        $('.js-carousel-grid').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,

            responsive: [
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        dots: true
                    }
                }

            ]
        });


    }





    function carouselsGrid() {

        var winWidth = $(window).width();

        if(winWidth >= 992) {
            $('.js-carousel-grid').slick('unslick');
        }
        else {

            $('.js-carousel-grid').slick('unslick').slick('reinit');

        }


    }


    $(window).on('resize', function(event) {
        carouselsGrid();
    });


    


  //////////
  // Global variables
  //////////

 //  var _window = $(window);
 //  var _document = $(document);

 //  function isRetinaDisplay() {
 //    if (window.matchMedia) {
 //        var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
 //        return (mq && mq.matches || (window.devicePixelRatio > 1));
 //    }
 //  }

 //  var _mobileDevice = isMobile();
 //  // detect mobile devices
 //  function isMobile(){
 //    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 //      return true
 //    } else {
 //      return false
 //    }
 //  }

 //  function msieversion() {
 //    var ua = window.navigator.userAgent;
 //    var msie = ua.indexOf("MSIE ");

 //    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
 //      return true
 //    } else {
 //      return false
 //    }
 //  }

 //  if ( msieversion() ){
 //    $('body').addClass('is-ie');
 //  }

 //  // BREAKPOINT SETTINGS
 //  var bp = {
 //    mobileS: 375,
 //    mobile: 568,
 //    tablet: 768,
 //    desktop: 1024,
 //    wide: 1336,
 //    hd: 1680
 //  }

 //  //////////
 //  // DEVELOPMENT HELPER
 //  //////////
 //  function setBreakpoint(){
 //    var wWidth = _window.width();

 //    var content = "<div class='dev-bp-debug'>"+wWidth+"</div>";

 //    $('.page').append(content);
 //    setTimeout(function(){
 //      $('.dev-bp-debug').fadeOut();
 //    },1000);
 //    setTimeout(function(){
 //      $('.dev-bp-debug').remove();
 //    },1500)
 //  }

 //  _window.on('resize', debounce(setBreakpoint, 200))

 //  ////////////
 //  // READY - triggered when PJAX DONE
 //  ////////////
 //  function pageReady(){
 //    legacySupport();
 //    initBuggifill();

 //    updateHeaderActiveClass();
 //    initHeaderScroll();

 //    initPopups();
 //    initSliders();
 //    runScrollMonitor();
 //    initMasks();

 //    revealFooter();
 //    _window.on('resize', throttle(revealFooter, 100));

 //    // temp - developer
 //    _window.on('resize', debounce(setBreakpoint, 200))
 //  }

 //  // pageReady();


 //  //////////
 //  // COMMON
 //  //////////

 //  function legacySupport(){
 //    // svg support for laggy browsers
 //    // svg4everybody();
 //  }

 //  function initBuggifill(){
 //    // Viewport units buggyfill
 //    window.viewportUnitsBuggyfill.init({
 //      force: false,
 //      refreshDebounceWait: 150,
 //      appendToBody: true
 //    });
 //  }


 //  // Prevent # behavior
	// _document
 //    .on('click', '[href="#"]', function(e) {
 //  		e.preventDefault();
 //  	})
 //    .on('click', 'a[href^="#section"]', function() { // section scroll
 //      var el = $(this).attr('href');
 //      $('body, html').animate({
 //          scrollTop: $(el).offset().top}, 1000);
 //      return false;
 //    })

 //  // FOOTER REVEAL
 //  function revealFooter() {
 //    var footer = $('[js-reveal-footer]');
 //    if (footer.length > 0) {
 //      var footerHeight = footer.outerHeight();
 //      var maxHeight = _window.height() - footerHeight > 100;
 //      if (maxHeight && !msieversion() ) {
 //        $('body').css({
 //          'margin-bottom': footerHeight
 //        });
 //        footer.css({
 //          'position': 'fixed',
 //          'z-index': -10
 //        });
 //      } else {
 //        $('body').css({
 //          'margin-bottom': 0
 //        });
 //        footer.css({
 //          'position': 'static',
 //          'z-index': 10
 //        });
 //      }
 //    }
 //  }

 //  // HEADER SCROLL
 //  // add .header-static for .page or body
 //  // to disable sticky header
 //  function initHeaderScroll(){
 //    if ( $('.header-static').length == 0 ){
 //      _window.on('scroll', throttle(function() {
 //        var vScroll = _window.scrollTop();
 //        var header = $('.header').not('.header--static');
 //        var headerHeight = header.height();
 //        var heroHeight = $('.hero').outerHeight() - headerHeight;
 //        // probably should be found as a first child of page contents

 //        if ( vScroll > headerHeight ){
 //          header.addClass('header--transformed');
 //        } else {
 //          header.removeClass('header--transformed');
 //        }

 //        if ( vScroll > heroHeight ){
 //          header.addClass('header--fixed');
 //        } else {
 //          header.removeClass('header--fixed');
 //        }
 //      }, 10));
 //    }
 //  }

 //  // HAMBURGER TOGGLER
 //  _document.on('click', '[js-hamburger]', function(){
 //    $(this).toggleClass('is-active');
 //    $('.header').toggleClass('is-menu-opened')
 //    $('[js-header-menu]').toggleClass('is-active');
 //    $('.mobile-navi').toggleClass('is-active');
 //  });

 //  function closeMobileMenu(){
 //    $('[js-hamburger]').removeClass('is-active');
 //    $('.header').removeClass('is-menu-opened')
 //    $('[js-header-menu]').removeClass('is-active');
 //    $('.mobile-navi').removeClass('is-active');
 //  }

 //  // SET ACTIVE CLASS IN HEADER
 //  // * could be removed in production and server side rendering
 //  // user .active for li instead
 //  function updateHeaderActiveClass(){
 //    $('.header__menu li').each(function(i,val){
 //      if ( $(val).find('a').attr('href') == window.location.pathname.split('/').pop() ){
 //        $(val).addClass('is-active');
 //      } else {
 //        $(val).removeClass('is-active')
 //      }
 //    });
 //  }


 //  // VIDEO PLAY
 //  _document.on('click', '.promo-video .icon', function(){
 //    $(this).closest('.promo-video').toggleClass('playing');
 //    $(this).closest('.promo-video').find('iframe').attr("src", $("iframe").attr("src").replace("autoplay=0", "autoplay=1"));
 //  });


 //  //////////
 //  // SLIDERS
 //  //////////

 //  function initSliders(){
 //    var slickNextArrow = '<div class="slick-prev"><svg class="ico ico-back-arrow"><use xlink:href="img/sprite.svg#ico-back-arrow"></use></svg></div>';
 //    var slickPrevArrow = '<div class="slick-next"><svg class="ico ico-next-arrow"><use xlink:href="img/sprite.svg#ico-next-arrow"></use></svg></div>'

 //    // General purpose sliders
 //    $('[js-slider]').each(function(i, slider){
 //      var self = $(slider);

 //      // set data attributes on slick instance to control
 //      if (self && self !== undefined) {
 //        self.slick({
 //          autoplay: self.data('slick-autoplay') !== undefined ? true : false,
 //          dots: self.data('slick-dots') !== undefined ? true : false,
 //          arrows: self.data('slick-arrows') !== undefined ? true : false,
 //          prevArrow: slickNextArrow,
 //          nextArrow: slickPrevArrow,
 //          infinite: self.data('slick-infinite') !== undefined ? true : true,
 //          speed: 300,
 //          slidesToShow: 1,
 //          accessibility: false,
 //          adaptiveHeight: true,
 //          draggable: self.data('slick-no-controls') !== undefined ? false : true,
 //          swipe: self.data('slick-no-controls') !== undefined ? false : true,
 //          swipeToSlide: self.data('slick-no-controls') !== undefined ? false : true,
 //          touchMove: self.data('slick-no-controls') !== undefined ? false : true
 //        });
 //      }

 //    })

 //    // other individual sliders goes here

 //    // SLICK - UNSLICK EXAMPLE
 //    // used when slick should be disabled on certain breakpoints

 //    // var _socialsSlickMobile = $('.socials__wrapper');
 //    // var socialsSlickMobileOptions = {
 //    //   mobileFirst: true,
 //    //   dots: true,
 //    //   responsive: [
 //    //     {
 //    //       breakpoint: 0,
 //    //       settings: {
 //    //         slidesToShow: 1,
 //    //         slidesToScroll: 1,
 //    //       }
 //    //     },
 //    //     {
 //    //       breakpoint: 568,
 //    //       settings: {
 //    //         slidesToShow: 2,
 //    //         slidesToScroll: 2,
 //    //       }
 //    //
 //    //     },
 //    //     {
 //    //       breakpoint: 992,
 //    //       settings: "unslick"
 //    //     }
 //    //
 //    //   ]
 //    // }
 //    // _socialsSlickMobile.slick(socialsSlickMobileOptions);
 //    //
 //    // _window.on('resize', debounce(function(e){
 //    //   if ( _window.width() > 992 ) {
 //    //     if (_socialsSlickMobile.hasClass('slick-initialized')) {
 //    //       _socialsSlickMobile.slick('unslick');
 //    //     }
 //    //     return
 //    //   }
 //    //   if (!_socialsSlickMobile.hasClass('slick-initialized')) {
 //    //     return _socialsSlickMobile.slick(socialsSlickMobileOptions);
 //    //   }
 //    // }, 300));

 //  }

 //  //////////
 //  // MODALS
 //  //////////

 //  function initPopups(){
 //    // Magnific Popup
 //    var startWindowScroll = 0;
 //    $('[js-popup]').magnificPopup({
 //      type: 'inline',
 //      fixedContentPos: true,
 //      fixedBgPos: true,
 //      overflowY: 'auto',
 //      closeBtnInside: true,
 //      preloader: false,
 //      midClick: true,
 //      removalDelay: 300,
 //      mainClass: 'popup-buble',
 //      callbacks: {
 //        beforeOpen: function() {
 //          startWindowScroll = _window.scrollTop();
 //          // $('html').addClass('mfp-helper');
 //        },
 //        close: function() {
 //          // $('html').removeClass('mfp-helper');
 //          _window.scrollTop(startWindowScroll);
 //        }
 //      }
 //    });

 //    $('[js-popup-gallery]').magnificPopup({
 //  		delegate: 'a',
 //  		type: 'image',
 //  		tLoading: 'Загрузка #%curr%...',
 //  		mainClass: 'popup-buble',
 //  		gallery: {
 //  			enabled: true,
 //  			navigateByImgClick: true,
 //  			preload: [0,1]
 //  		},
 //  		image: {
 //  			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
 //  		}
 //  	});
 //  }

 //  function closeMfp(){
 //    if ( _window.width() < bp.desktop ){
 //      $.magnificPopup.close();
 //    }
 //  }

 //  ////////////
 //  // UI
 //  ////////////

 //  // custom selects
 //  $('.ui-select__visible').on('click', function(e){
 //    var that = this
 //    // hide parents
 //    $(this).parent().parent().parent().find('.ui-select__visible').each(function(i,val){
 //      if ( !$(val).is($(that)) ){
 //        $(val).parent().removeClass('active')
 //      }
 //    });

 //    $(this).parent().toggleClass('active');
 //  });

 //  $('.ui-select__dropdown span').on('click', function(){
 //    // parse value and toggle active
 //    var value = $(this).data('val');
 //    if (value){
 //      $(this).siblings().removeClass('active');
 //      $(this).addClass('active');

 //      // set visible
 //      $(this).closest('.ui-select').removeClass('active');
 //      $(this).closest('.ui-select').find('input').val(value);

 //      $(this).closest('.ui-select').find('.ui-select__visible span').text(value);
 //    }

 //  });

 //  // handle outside click
 //  $(document).click(function (e) {
 //    var container = new Array();
 //    container.push($('.ui-select'));

 //    $.each(container, function(key, value) {
 //        if (!$(value).is(e.target) && $(value).has(e.target).length === 0) {
 //            $(value).removeClass('active');
 //        }
 //    });
 //  });

 //  // numeric input
 //  $('.ui-number span').on('click', function(e){
 //    var element = $(this).parent().find('input');
 //    var currentValue = parseInt($(this).parent().find('input').val()) || 0;

 //    if( $(this).data('action') == 'minus' ){
 //      if(currentValue <= 1){
 //        return false;
 //      }else{
 //        element.val( currentValue - 1 );
 //      }
 //    } else if( $(this).data('action') == 'plus' ){
 //      if(currentValue >= 99){
 //        return false;
 //      } else{
 //        element.val( currentValue + 1 );
 //      }
 //    }
 //  });

 //  // textarea autoExpand
 //  _document
 //    .one('focus.autoExpand', '.ui-group textarea', function(){
 //        var savedValue = this.value;
 //        this.value = '';
 //        this.baseScrollHeight = this.scrollHeight;
 //        this.value = savedValue;
 //    })
 //    .on('input.autoExpand', '.ui-group textarea', function(){
 //        var minRows = this.getAttribute('data-min-rows')|0, rows;
 //        this.rows = minRows;
 //        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
 //        this.rows = minRows + rows;
 //    });

 //  // Masked input
 //  function initMasks(){
 //    $(".js-dateMask").mask("99.99.99",{placeholder:"ДД.ММ.ГГ"});
 //    $("input[type='tel']").mask("+7 (000) 000-0000", {placeholder: "+7 (___) ___-____"});
 //  }

 //  ////////////
 //  // SCROLLMONITOR - WOW LIKE
 //  ////////////
 //  function runScrollMonitor(){
 //    $('.wow').each(function(i, el){

 //      var elWatcher = scrollMonitor.create( $(el) );

 //      var delay;
 //      if ( $(window).width() < 768 ){
 //        delay = 0
 //      } else {
 //        delay = $(el).data('animation-delay');
 //      }

 //      var animationClass

 //      if ( $(el).data('animation-class') ){
 //        animationClass = $(el).data('animation-class');
 //      } else {
 //        animationClass = "wowFadeUp"
 //      }

 //      var animationName

 //      if ( $(el).data('animation-name') ){
 //        animationName = $(el).data('animation-name');
 //      } else {
 //        animationName = "wowFade"
 //      }

 //      elWatcher.enterViewport(throttle(function() {
 //        $(el).addClass(animationClass);
 //        $(el).css({
 //          'animation-name': animationName,
 //          'animation-delay': delay,
 //          'visibility': 'visible'
 //        });
 //      }, 100, {
 //        'leading': true
 //      }));
 //      elWatcher.exitViewport(throttle(function() {
 //        $(el).removeClass(animationClass);
 //        $(el).css({
 //          'animation-name': 'none',
 //          'animation-delay': 0,
 //          'visibility': 'hidden'
 //        });
 //      }, 100));
 //    });

 //  }




});
