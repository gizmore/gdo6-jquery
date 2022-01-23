"use strict";
$(function(){

	window.GDO.shortDebugURL = function(url) {
		let pattern = '(' + GDO_PROTOCOL + "://" + GDO_DOMAIN + GDO_WEB_ROOT;
		pattern += '([^? ]+)[ ?$][^ ]*)';
		pattern = new RegExp(pattern);
		return url.replace(pattern, '<a href="$1">$2</a>');
	};

	window.GDO.error = function(html, title) {
//		console.error(html);
		var dialog = $('<div id="gdo-error-dialog" class="modal">' + html + '</div>');
		$('body').append(dialog);
		dialog.modal({
			closeClass: 'icon-remove',
		});
		let defer = $.Deferred();
		dialog.on($.modal.CLOSE, function() {
			dialog.remove();
			defer.resolve();
		});
		return defer.promise();
	};

//	$.ajaxSetup({
//		headers: {
//			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//		},
//        xhrFields: {
//	         withCredentials: true
//	    }
//	});
	
});
