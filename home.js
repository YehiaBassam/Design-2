$(document).ready(function () {
	$(window).scroll(function () {
		let scroll = $(window).scrollTop();
		if (scroll > 100) {
			$(".my_navbar").css("background", "#565555");
		}
		else {
			$(".my_navbar").css("background", "transparent");
		}
	})
})