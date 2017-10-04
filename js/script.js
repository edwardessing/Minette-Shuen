$(document).ready(function() {

/* signature */
	if (typeof console !== 'undefined') {
		console.log("%cEDES, \nDesign & Development: Edward Essing (http://edwardessing.com)", "color: #FFA500; font-weight: bold; font-size: 12px;");
	}


/* menu */
	$('.menu-link').click(function () {
		$('.menu-link').toggleClass( 'active' );
		$('.dropdown').toggleClass( 'active' );
	});

	$(document).mouseup(function (e) {
		var box = $('.dropdown, .menu-link');
		if (!box.is(e.target) // if the target of the click isn't the container...
			&& box.has(e.target).length === 0) // ... nor a descendant of the container
			{
				$('.menu-link').removeClass('active');
				box.removeClass('active');
			}
	});

/* image thumbnails + captions */
$('.img-thumb').each(function() {
	var path = $(this).attr("alt");
	var directory = path.replace(/[^\/]*$/, '');
	var filename = path.replace(/^.*[\\\/]/, '');
	var ext = filename.split('.').pop();
	var caption = filename.replace(/\.[^/.]+$/, '')
	// $(this).parent().prop('href', "/images/" + caption + "." + ext);
	/* caption */
	// $(this).parent().prop('title', caption);
	// if (caption != '') {
	// 	var imgWidth = $(this).width();
	// 	var imgHeight = $(this).height();
	// 	var position = $(this).position();
	// 	var positionTop = (position.top + imgHeight - 26)
	// 	$("<span class='img-caption'>" + caption + "</span>").css({
	// 		"display": "block",
	// 		"width": "100%",
	// 		"text-align": "center",
	// 		"padding": "10px 0 40px"
	// 	}).insertAfter(this);
	// }
});

$('.gallery').magnificPopup({
	delegate: 'a.img',
	type: 'image',
	tLoading: 'Loading image %curr%...',
	mainClass: 'mfp-img-mobile',
	fixedBgPos: true,
	closeOnContentClick: true,
	gallery: {
		enabled: true,
		navigateByImgClick: false,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title');
		}
	}
});

$('html').hide()

/* script end */
});