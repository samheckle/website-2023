window.onload = () => {
  request()
}

let words = []

const request = async () => {
  const response = await fetch("https://planet-green-flute.glitch.me/")
  const json = await response.json()
  console.log(json)
  words = json.split(' ')
  words = words.filter(n => n)
  appendWords(words)
}

const appendWords = (w) =>{
  for(let i = 0; i < w.length; i++){
    var p = document.createElement('p')
    p.innerHTML = w[i]
    p.style.top = i * (500/w.length) + 'px'
    let img = document.getElementById('background')
    let width = img.clientWidth
    let offset = window.innerWidth/3
    p.style.left = getRandomInt(offset, offset + width/2) + 'px'
    p.classList.add('blackoutp')
    document.getElementById('content').appendChild(p)
  }
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

// setting images
let int = getRandomInt(1,29)
let imgUrl = 'images/' + int + '.jpg'
console.log(imgUrl)
// document.getElementById("content").style.backgroundImage = "url("+imgUrl+")"
var elem = document.createElement("img");
elem.setAttribute("src", imgUrl);
elem.setAttribute("height", "100%");
elem.setAttribute("alt", "Flower");
elem.setAttribute('id', 'background')
elem.classList.add('blackouti')
document.getElementById("content").appendChild(elem);
