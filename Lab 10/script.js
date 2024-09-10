document.getElementById('title').innerHTML = 'DOM Manipulation with JavaScript';

let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'green'; 
}

let highlights = document.getElementsByClassName('highlight');
for (let i = 0; i < highlights.length; i++) {
    highlights[i].style.fontWeight = 'bold'; 
}

function changeImage() {
    document.getElementById('image').src = 'https://via.placeholder.com/300x200/ff0000/ffffff';
}

function addTextNode() {
    let newTextNode = document.createTextNode('This is a newly added text node.');
    document.getElementById('parent').appendChild(newTextNode);
}

function removeNode() {
    let childNode = document.getElementById('child');
    if (childNode) {
        document.getElementById('parent').removeChild(childNode);
    }
}
