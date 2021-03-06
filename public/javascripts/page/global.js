(function($, window) {
	$("#hasRemind").each(function() {
		var that = $(this);
		$(document).trigger("remind.countAll", [

			function(err, total) {
				if (err) {
					that.text("获取消息失败");
				}
				var $reminds;
				if (total === 0) {
					that.text("没有新消息");
				} else {
					that.append("<span class='label label-danger' style='margin-right:5px'>" + total + "</span>").append("<span>新消息</span>").append("<b class='caret'></b>");
					$reminds = $("<ul class='dropdown-menu' id='reminds'></ul>").insertAfter(that);
					$(document).trigger("remind.draw", [$reminds]);
				}
			}
		]);
	});
	$(document).scroll(function(event) {
		if ($(window).scrollTop() > 100) {
			$("#scrollToTop").fadeIn();
		} else {
			$("#scrollToTop").fadeOut();
		}
	});
	$("#scrollToTop").click(function(event) {
		$('html,body').animate({
			scrollTop: 0
		}, 'slow');
		return false;
	});
}(jQuery, window));