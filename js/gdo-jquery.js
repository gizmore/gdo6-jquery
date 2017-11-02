window.GDO.error = function(html, title) {
	var dialog = $('<div id="gdo-error-dialog">'+html+'</div>');
	$(window.document.body).append(dialog);
	$('#gdo-error-dialog').on($.modal.BEFORE_CLOSE, function(event, modal) {
		dialog.remove();
	});
	$('#gdo-error-dialog').modal();
};
