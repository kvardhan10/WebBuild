var sun = document.getElementById('sun');
var mountain = document.getElementById('mountain');
var front = document.getElementById('front');
var birds = document.getElementById('birds');
var text = document.getElementById('text');

window.addEventListener('scroll', function(){
  var value = window.scrollY;
  birds.style.left = (10 * value) + 'px';
  sun.style.left = value * 1.02 + 'px'
  sun.style.top = value + 'px'
  text.style.marginRight = value * 2 + 'px';
})

ScrollOut({
  targets: 'h2, h4, p, button'
})
