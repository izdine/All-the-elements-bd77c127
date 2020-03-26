var h1 = document.querySelector('h1');
h1.innerText = document.title;
document.querySelector('h1')
h1.classList.add("classy");

var paragrafen = document.querySelectorAll("p");
paragrafen.forEach(function(element){
element.classList.add('paragrafenclas');
});
