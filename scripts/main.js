function clickedPanel(panelName) {
    // Hide the previous html animated, load the new html, show animated
    $('article').hide("1", function() { $('article').load('html/' + panelName + '.html', '', function() { $('article').show("1"); }); });
}
