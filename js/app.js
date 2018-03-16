window.onload = function() {
	move();
	move2();
}
function move() {
	var elem = document.getElementById("myBar"); 
	var width = 10;
	var id = setInterval(frame, 10);
	function frame() {
		if (width >= 87) {
			clearInterval(id);
		} else {
			width++; 
			elem.style.width = width + '%'; 
			elem.innerHTML = width * 1 + '%';
		}
	}
}
function move2() {
	var elem = document.getElementById("myBar2"); 
	var width = 10;
	var id = setInterval(frame, 10);
	function frame() {
		if (width >= 85) {
			clearInterval(id);
		} else {
			width++; 
			elem.style.width = width + '%';
			elem.innerHTML = 1925 + width + 's';
		}
	}
}
$(document).ready(function(){
	$('.shivasurya-count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	var clock;
	var currentDate = new Date();
	/* 2 Month Count Down */
	/*var futureDate  = new Date("April 20, 2017 12:00 AM");
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	clock = $('#Long-Count').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});*/
	/* 24 Hour Count Down */
	var futureDate  = new Date("April 21, 2017 12:00 AM");
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	clock = $('#Short-Count').FlipClock(diff, {
		countdown: true
	});
});
$('.shivasurya-count').click(function(){
	$('.shivasurya-count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
});
$(document).foundation();
