"use strict"
window.GDO.error = function(html, title) {
	console.error(html);
	var message = html.error ? html.error : '';
	var message = message ? message : (html.data ? html.data.error : '');
	var dialog = $('<div id="gdo-error-dialog">'+message+'</div>');
	$(window.document.body).append(dialog);
	$('#gdo-error-dialog').on($.modal.BEFORE_CLOSE, function(event, modal) {
		dialog.remove();
	});
	$('#gdo-error-dialog').modal();
};
