
var responsiveImage = (function() {
	var imgs = document.querySelectorAll('[data-back]');
	var w = window.innerWidth;
	var breakpoint = 992;

	var run = function() {
		imgs.forEach(function(el,i) {
			var urls = el.getAttribute('data-back').split('|');
			var src = '';

			if(w >= breakpoint) {
				src = urls[1];
			}
			else {
				src = urls[0];
			}
			if(el.tagName === 'IMG') {
				el.src = src;
			}
			else {
				el.style.backgroundImage = 'url(' + src + ')';
			}
		});
	}

	var resize = function(width) {
		if((width >= breakpoint && w < breakpoint) || (width < breakpoint && w >= breakpoint)) {
			w = width;
			run();
		}
	};

    window.addEventListener('resize', function(event) {
	  resize(window.innerWidth);
	}, true);

	run();

})();
