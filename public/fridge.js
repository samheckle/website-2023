window.onload = () => {
  fridge();
};

function fridge() {
  const s = (sketch) => {
    // size of containing element
    let width = document.getElementById("canvas").parentElement.clientWidth;
    let height = document.getElementById("canvas").parentElement.clientHeight;

    // single rand vid
    let randV
    // instance of glitch
    let glitch = []

    sketch.setup = () => {
      sketch.createCanvas(width, height);
      sketch.background(0);

      let v = Math.floor(sketch.random(2, 43))
      if(v < 10){
        v = "0" + v
      }
      randV = sketch.createVideo("fridge-assets/fridge_Sub_" + v + ".00.mp4", () => {
        randV.hide();
        randV.volume(0);
        randV.loop();
        randV.autoplay(true);
        randV.size(width, height)
      })

      for(let i = 0; i < 9; i++){
        glitch.push(new Glitch(sketch))
        glitch[i].errors(false);
        glitch[i].debug(false);
      }
    };
    sketch.draw = () => {
      w = randV.width
      h = randV.height

      for(let col = 0; col < 3; col++){
        for(let row = 0; row < 3; row++){
          let index = row + (3 * col)
          let cut = randV.get(w / 3 * row, h/3 * col, w/3, h/3)
          cut.filter(sketch.GRAY)
          if(index != 4){
            glitch[index].resetBytes()
            glitch[index].loadImage(cut)
            glitch[index].randomBytes(2)
            glitch[index].buildImage();
            sketch.image(glitch[index].image, w/3*row, h/3 * col)
          } else{
            sketch.image(cut, w/3*row, h/3 * col)
          }
        }
      }  
    };
  };
  return new p5(s, "canvas");
}
