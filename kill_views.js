function kill_views() {
// not sure if this is the best way to go about it...
let views = document.querySelectorAll('[href*="analytics"]');
for (let i = 0; i < views.length; i++) {
    let outer = views[i].parentElement
    outer.style.fontSize = '31px'
    views[i].innerHTML = '&#129335;&#8205;&#9792;&#65039;';
    console.log('removed: ' + views[i]);
  } 
}

setInterval(kill_views, 500)