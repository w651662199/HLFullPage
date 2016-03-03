(function($){
    function fix(cur, pagesLength, loop) {
        if (cur < 0) {
            return !!loop ? pagesLength - 1 : 0;
        }

        if (cur >= pagesLength) {
            return !!loop ? 0 : pagesLength - 1;
        }


        return cur;
    }
    var Fullpage = function(element){
        this.element = element;
        this.currentIndex = 0;
        this.pages = this.element.find('.page');
        this.pageLength = this.pages.length;
        this.pageWidth = $(window).width();
        this.pageHeight = $(window).height();
        this.element.height(this.pageHeight);
        this.pages.height(this.pageHeight);
        this.pages.width(this.pageWidth);
        this.startY = 0;
        this.der = 0.1;
        this.direction = 1;
    };
    Fullpage.prototype = {
        init: function(){
            var height = this.pageHeight;
            var that = this;
            this.pages.each(function(index){
                if(index == 0){
                    $(this).css({'-webkit-transform':' translateY(0px)'}).addClass('showed')
                }else{
                    $(this).css({'-webkit-transform':' translateY('+height+'px)'})
                }
                $(this).on('touchstart',touchStart);
                $(this).on('touchend',touchEnd)
            });

            function touchStart(event) {
                var touch = event.touches[0];
                event.preventDefault();
                that.startY = touch.pageY;
                that.startX = touch.pageX;
            }

            function touchEnd(event) {
                event.preventDefault();
                var sub = (event.changedTouches[0].pageY - that.startY)/that.pageHeight;
                var der = (sub > that.der || sub < -that.der) ? sub > 0 ? -1 : 1 : 0;
                that.direction = der;
                that.moveTo(that.currentIndex + der);
            }
        },
        moveTo: function(next) {
            var that = this;
            var cur = that.currentIndex;

            next = fix(next, that.pageLength, false);
            if(that.direction > 0 && cur < (that.pageLength - 1)){
                that.pages.eq(next).addClass('showed').css({'-webkit-transform':' translateY(0px)'})
                that.currentIndex = next;
            }else if(that.direction < 0 && cur > 0){
                that.pages.eq(cur).addClass('showed').css({'-webkit-transform':' translateY('+that.pageHeight+'px)'})
                that.currentIndex = next;
            }
            return 0;
        }

    };

    $.fn.HLFullPage = function(){
        //fullpage
        var fullpage = new Fullpage(this);
        //调用其方法
        return fullpage.init();
    }
})(Zepto);