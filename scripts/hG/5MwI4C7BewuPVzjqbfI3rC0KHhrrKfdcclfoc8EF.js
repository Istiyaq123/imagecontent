
function start(){
  var one = document.getElementById("1");

  one.addEventListener("mouseover", oneI);
  one.addEventListener("mouseout", oneO);
  
  function oneI(){
    one.src = "https://s2contentimage.netlify.com/image-poster/ic/i28c7yo2dDj5L0e2vmQ4VRBkGY0sayO3BlEeQr3aAsnQPGA8tyeUt6oaIogR.png";
  }

  function oneO(){
    one.src = "https://s2contentimage.netlify.com/image-poster/9i/8ZbYtnfRwKvIJgauBprZHU2Q4hpBA9RgOutDNNEbHLXoiX8CLirxkRIAfWIU.png";
  }
}