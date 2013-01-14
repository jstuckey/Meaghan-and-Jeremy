$(document).ready(function() {
    // Check if a hash fragment was included in the URL
    var hashFrag = location.hash;
    if (hashFrag && hashFrag.length > 1) {
        // Strip off the # character
        hashFrag = hashFrag.replace('#', '');
        
        // Load the page referenced in the hash fragment
        loadPage(hashFrag);
    }
});

function loadPage(pageName) {
    // Loading the article element with the conents of an html file
    // Hide previous html animated, load new html, show new html animated, scroll to article element
    $('article').hide("1", function() { $('article').load('html/' + pageName + '.html', '', function() { $('article').show("1", function() { scrollToArticle(); }); }); });
    
    // Update the document title
    document.title = 'Meaghan and Jeremy | ' + pageTitleMapping[pageName];
    
    // Update the URL hash fragment
    location.hash = pageName;
}

function scrollToArticle() {
     $('html,body').animate({scrollTop: $("article").offset().top}, 200);
}

function scrollToTop() {
    $('html,body').animate({scrollTop: $("#top").offset().top}, 200);
}

var pageTitleMapping = {
    'brideandgroom': 'Bride and Groom',
    'bridalparty': 'Bridal Party',
    'registries': 'Registries',
    'service': 'Service',
    'reception': 'Reception',
    'accomodations': 'Accomodations'
}
