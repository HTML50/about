var currentPage = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);


var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = '../img/general.css';
var head = document.getElementsByTagName('head')[0];
head.appendChild(link);

var a = document.createElement("script");
a.src = 'list.js';
var head = document.getElementsByTagName("head")[0];
head.appendChild(a);

var pre = document.createElement('div');
pre.className = 'switch previous-btn';
pre.innerHTML = '<span class="arrow">‹</span>'
document.body.appendChild(pre);

var next = document.createElement('div');
next.className = 'switch next-btn';
next.innerHTML = '<span class="arrow">›</span>'
document.body.appendChild(next)

window.addEventListener('load', function() {
    var index = list.indexOf(currentPage),
        preLink = list[index - 1],
        nextLink = list[index + 1];

    if (index === 0) {
        preLink = list[list.length - 1];
    }

    if (index === list.length - 1) {
        nextLink = list[0]
    }

    document.querySelector('.previous-btn').addEventListener('click', function() {
        location.href = preLink;
    })

    document.querySelector('.next-btn').addEventListener('click', function() {
        location.href = nextLink;
    })

})