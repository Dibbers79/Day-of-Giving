$(document).ready(function(){
	$('.shivasurya-count').each(function () { //find class shivasurya-count, start function
		$(this).prop('Counter',0).animate({ //target itself, and create a new property: var Counter and zero, start animate function
			Counter: $(this).text() //set value of var counter to passed # and change text to?
		}, { //end one start another function
			duration: 2000,
			easing: 'swing',
			step: function (now) { //call a loop func, now? self start?
				$(this).text(Math.ceil(now)); //set this var to a rounded number? now?
			}
		});
	});
});
$('.shivasurya-count').click(function(){
	$('.shivasurya-count').each(function () { //find class shivasurya-count, start function
		$(this).prop('Counter',0).animate({ //target itself, and create a new property: var Counter and zero, start animate function
			Counter: $(this).text() //set value of var counter to passed # and change text to?
		}, { //end one start another function
			duration: 2000,
			easing: 'swing',
			step: function (now) { //call a loop func, now? self start?
				$(this).text(Math.ceil(now)); //set this var to a rounded number? now?
			}
		});
	});
});
var clock;
$(document).ready(function() {
	var currentDate = new Date();
	var futureDate  = new Date("April 20, 2017 12:00 AM");
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	clock = $('#Long-Count').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});
});
var clock;
$(document).ready(function() {
	var currentDate = new Date();
	var futureDate  = new Date("April 21, 2017 12:00 AM");
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	clock = $('#Short-Count').FlipClock(diff, {
		countdown: true
	});
});
$(document).foundation();