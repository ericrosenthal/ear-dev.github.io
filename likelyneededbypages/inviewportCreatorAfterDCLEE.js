(function() {
    'use strict';
    callToDateToGenerateBreadcrumb();
    var imageNode = document.createElement('img');
    imageNode.src = 'sparrow.png?inviewport-jsloaded';
    var inviewportDiv = document.getElementById('inviewport-images');
    inviewportDiv.appendChild(imageNode);
})();
