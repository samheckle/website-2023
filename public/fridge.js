window.onload = () => {
  fridge();
};

function fridge() {
  const s = (sketch) => {
    let width = document.getElementById("canvas").parentElement.clientWidth;
    let height = document.getElementById("canvas").parentElement.clientHeight;
    let imgs = [];
    let imgPixels = [];
    let load = false;
    sketch.preload = () => {
      imgs.push(sketch.loadGif("fridge-assets/1.gif"));
    };
    sketch.setup = () => {
      //elem.parentElement.clientWidth
      sketch.createCanvas(width, height);
      sketch.background(0);
      if (imgs[0].loaded()) {
        console.log('load')
      imgPixels.push(imgs[0].get(0,0,width/2,height/2))
      }
      // sketch.imggettest = sketch.imgtest.get(0,0,width/2,height/2)
      // console.log('te')
      // sketch.image(imgs[0], 0,0,width,height)

      // sketch.image(imgPixels[0], 0,0,width,height)
      // sketch.image(sketch.imggettest, 0,0,width,height)
    };
    sketch.draw = () => {
      if (imgs[0].loaded()) {
        if(!load){
            // imgPixels.push(imgs[0].get(0,0,width/2,height/2))
            load = true;
            console.log(load)
            imgs[0].loadPixels()
        }
        sketch.image(imgPixels, 0, 0, width, height);
      }
      // sketch.image(imgs[0], 0,0,width,height)
      // imgs[0].play()
    };
  };
  return new p5(s, "canvas");
}
