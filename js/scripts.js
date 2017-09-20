jQuery(document).ready(function($) {

    // the blocking of links default behavior
    function prevent(){
        $('.prevent, .mobile-menu .expanded, a[href="/broken"]').on('click', function(event){
            event.preventDefault();
        });
    }
    prevent();

    // for FAQ list
    $('.faq-sub-list > li').each(function() {
        var $this = $(this),
            h2    = $this.children('h2');

        // create unique id for a11y relationship
        var id = 'collapsible-' + $this.index();

        // wrap the content and make it focusable
        $this.find('.accordion-box-content').wrapAll('<div id="'+ id +'" aria-hidden="true">');
        var panel = h2.next();

        // Add the button inside the <h2> so both the heading and button semanics are read
        h2.wrapInner('<a href="/broken" class="prevent" aria-expanded="false" aria-controls="'+ id +'">');

        // Toggle the state properties
        h2.on('click', function(e) {
            e.preventDefault();
            var a     = $(this).find('a'),
                state = ( a.attr('aria-expanded') === 'false' ) ? true : false;
            a.attr('aria-expanded', state);
            panel.attr('aria-hidden', !state);
            if (state) {
                $(this).addClass('open');
            } else {
                $(this).removeClass('open');
            }
        });
    });

    // for header search toggle
    $(".search-btn, .close-search").on('click', function(){
        $('#search-box').slideToggle(300);
    });

    // for header login toggle
    $(".login, .login-bottom-box .close-btn").on('click', function(){
        $('.login-bottom-box').slideToggle(300);
    });

    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    //for niceScroll
    if ( $('.nice-scroll').length ) {
       $(".nice-scroll").niceScroll({
            autohidemode: false,
            cursorcolor:"#d9d9d9",
            cursorwidth:"7px",
            cursorborderradius: "1em",
            cursorborder: "1px solid #d9d9d9",
            background:"rgba(238,238,238,1)"
        });

        $(window).on('resize', function() {
            setTimeout(function () {
                var scroll =  $(".nice-scroll").getNiceScroll();
                scroll.resize();
            },200);

        });
    }



    //for map controls
    $('.control-bar-toggle').on('click', function(){
        $('.control-bar').toggleClass('showing');
        $('.control-bar-toggle').toggleClass('open');
        $(document.body).toggleClass('overflow');
    });
    $('.top-bar-toggle').on('click', function(){
        $('.top-bar').toggleClass('showing');
        $('.top-bar-toggle').toggleClass('open');
        $(document.body).toggleClass('overflow');
    });
});