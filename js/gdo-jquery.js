"use strict";

window.GDO.error = function(html, title) {
	console.error(html);
	var dialog = $('<div id="gdo-error-dialog" class="modal">' + html + '</div>');
	$('body').append(dialog);
	dialog.modal({
		closeClass: 'icon-remove',
	});
	dialog.on($.modal.CLOSE, function(event, modal) {
		dialog.remove();
	});
};

$(function(){
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		},
        xhrFields: {
	         withCredentials: true
	    }
	});
	
});
