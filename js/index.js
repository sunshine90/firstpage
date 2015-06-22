; $(function(){
	var url = "file:///G:/gitbubblog/summary/content.json";
	$.get(url, function(data, status) {
		alert(status);
	});
});