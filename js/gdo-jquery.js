"use strict"
window.GDO.error = function(html, title) {
	var message = html.error ? html.error : '';
	var message = message ? message : (html.json ? html.json.error : '');
	var dialog = $('<div id="gdo-error-dialog">' + message + '</div>');
	$(window.document.body).append(dialog);
	$('#gdo-error-dialog').on($.modal.BEFORE_CLOSE, function(event, modal) {
		dialog.remove();
	});
	$('#gdo-error-dialog').modal();
};
