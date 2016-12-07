class myScroll {
	constructor(el, opts) {
		var self = this;
        self.el = el;
		self.intId = "";
		self.options = {
			speed: 4000, //婊氬姩閫熷害,鍊艰秺澶ч€熷害瓒婃參
			rowHeight: 60 //姣忚鐨勯珮搴�
		}
		self.options = $.extend({}, self.options, opts),
			self.init();
	}
	init() {
        var self = this;
        var sh = self.options["rowHeight"],
            speed = self.options["speed"],
            _this = $(self.el);

        self.intId = setInterval(function () {
            self.marquee(_this, sh);
        }, speed);

	}
	marquee(obj, step) {
		obj.find("ul").animate({
			marginTop: '-=1'
		}, 0, function () {
			var s = Math.abs(parseInt($(this).css("margin-top")));
			if (s >= step) {
				$(this).find("li").slice(0, 1).appendTo($(this));
				$(this).css("margin-top", 0);
			}
		});
	}
}
module.exports = myScroll;