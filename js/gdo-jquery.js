"use strict";

window.GDO.error = function(html, title) {
	console.error(html);
	var dialog = $('<div id="gdo-error-dialog" class="modal">' + html + '</div>');
	$('body').append(dialog);
	$('#gdo-error-dialog').on($.modal.BEFORE_CLOSE, function(event, modal) {
		dialog.remove();
	});
	$('#gdo-error-dialog').modal({
		closeClass: 'icon-remove',
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
