var contentScrollRelation;
function changeScrollRelation() {
	var height = $(window).height();
	if (height > 820) {
		contentScrollRelation = 0.41;
	} else {
		contentScrollRelation = 0.31;
	}
}

changeScrollRelation();
$(window).resize(function() {
	changeScrollRelation();
});

var startinghandlepos = $('.browserscrollhandle').css('top')
animGaugeText = Array('5m 26s', '3m 5s', '1m 12s', '15s', "Done!", "");
// This needs to be an array if are multiple elements with the animation
lastStep = Array();
$('.animGauge').html(animGaugeText[0]);
$('.animGauge').css('display', 'block');
function animMovement(step) {
	var currentStep = step;
	var pixelsToScroll = 0;
	if (currentStep == 1) {
		pixelsToScroll = 80;
		var speed = 700;
		var delayTillNextAnim = 500;
	}
	if (currentStep == 2) {
		pixelsToScroll = 200;
		var speed = 700;
		$('.animGauge').fadeIn(200);
		var delayTillNextAnim = 100;
	}
	if (currentStep == 3) {
		pixelsToScroll = 150;
		var speed = 800;
		var delayTillNextAnim = 100;
	}
	if (currentStep == 4) {
		pixelsToScroll = 150;
		var speed = 1000;
		var delayTillNextAnim = 100;
	}
	if (currentStep == 5) {
		pixelsToScroll = 0;
		var delayTillNextAnim = 700;
	}
	if (typeof lastStep[currentStep] === "undefined") lastStep[currentStep] = false;
	if (pixelsToScroll > 0) {
		setTimeout(function(){
			$('.browserscrollhandle').animate({
				top: '+='+Math.round(pixelsToScroll*contentScrollRelation)
			}, speed, 'easeOutCubic', function() {
				currentStep++;
				if (lastStep[currentStep] != true) {
					lastStep[currentStep] = true;
					animMovement(currentStep);
				}
			});
			$('.browsercontent').animate({
				'margin-top': '-='+pixelsToScroll
			}, speed, 'easeOutCubic');

			setTimeout(function(){
				$('.animGauge').html(animGaugeText[currentStep]);
			}, speed-100);

		}, delayTillNextAnim);
	}
	if ((currentStep == 5) && (!lastStep[6])) {
		setTimeout(function(){
			// Restart
			lastStep[6] = true;
			$('.animGauge').css('display', 'none');
			$('.browserscrollhandle').animate({
				top: startinghandlepos
			}, 900, 'easeOutCubic', function() {
				$('.animGauge').html(animGaugeText[0]);
				$('.animGauge').css('display', 'block');
				currentStep = 0;
				lastStep = Array();
				animMovement(1);
			});
			$('.browsercontent').animate({
				'margin-top': 0
			}, 900, 'easeOutCubic');
		}, delayTillNextAnim);
	}
}
// Delay on start
animMovement(1);