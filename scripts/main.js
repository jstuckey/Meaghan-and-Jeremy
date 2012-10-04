

function clickedPanel(panelName) {
    // Loading the article element with the conents of an html file
    // Hide previous html animated, load new html, show new html animated, scroll to article element
    $('article').hide("1", function() { $('article').load('html/' + panelName + '.html', '', function() { $('article').show("1", function() { scrollToArticle(); }); }); });
}

function scrollToArticle() {
     $('html,body').animate({scrollTop: $("article").offset().top}, 200);
}
