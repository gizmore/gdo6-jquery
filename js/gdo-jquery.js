"use strict";
window.GDO.error = function(html, title) {
	console.log(html);
	var dialog = $('<div id="gdo-error-dialog">' + html + '</div>');
	$('#gdo-pagewrap').append(dialog);
	$('#gdo-error-dialog').on($.modal.BEFORE_CLOSE, function(event, modal) {
		dialog.remove();
	});
	$('#gdo-error-dialog').modal();
};
