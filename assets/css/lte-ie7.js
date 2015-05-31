/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-facebook' : '&#x66;',
			'icon-google-plus' : '&#x67;',
			'icon-feed' : '&#x72;',
			'icon-html5' : '&#x35;',
			'icon-css3' : '&#x33;',
			'icon-twitter' : '&#x74;',
			'icon-youtube' : '&#x79;',
			'icon-chrome' : '&#x63;',
			'icon-firefox' : '&#x46;',
			'icon-IE' : '&#x65;',
			'icon-opera' : '&#x6f;',
			'icon-safari' : '&#x73;',
			'icon-iglogo' : '&#x49;',
			'icon-linkedin' : '&#x6c;',
			'icon-paypal' : '&#x70;',
			'icon-play' : '&#x50;',
			'icon-pause' : '&#x3d;',
			'icon-stop' : '&#x53;',
			'icon-backward' : '&#x3c;',
			'icon-forward' : '&#x3e;',
			'icon-shield' : '&#x56;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};