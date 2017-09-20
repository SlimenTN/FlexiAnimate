/**
 * Developed by SBC
 * author Arnaout Slimen <arnaout.slimen@sbc.tn>
 * Uses animate.css to add animation to html tag
 * Example:
 *      <span class="animated" data-animation="fadein">Animate</span>
 */
(function() {
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });

    manage_animation = function () {
        var scrollOffset = $(document).scrollTop();
        $('.animated').each(function (index) {
            var elem = $(this);
            var animation = elem.attr('data-animation');
            var a = elem.attr('data-animated');
            var animated = (elem.attr('data-animated') !== undefined);
            var containerOffset = elem.offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                if(!animated){
                    elem.animateCss(animation);
                    elem.attr('data-animated', '1');
                }
            }
        });
    };
    manage_animation();
    $(document).bind('scroll', function(ev) {
        manage_animation();
    });
})();