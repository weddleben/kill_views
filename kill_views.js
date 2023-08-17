function kill_views() {
// not sure if this is the best way to go about it...
let views = document.querySelectorAll('[href*="analytics"]');
for (let i = 0; i < views.length; i++) {
    views[i].remove()
    console.log('removed: ' + views[i])
  } 
}

setInterval(kill_views, 500)