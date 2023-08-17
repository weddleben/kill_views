function kill_views(){
let views = document.querySelectorAll('[href*="analytics"]');
for (let i = 0; i < views.length; i++) {
    views[i].remove()
    console.log('removed element' + views[i])
  } 
}

setInterval(kill_views, 500)