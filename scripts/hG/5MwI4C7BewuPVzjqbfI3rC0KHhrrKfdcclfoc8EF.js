function start(){
  var one = document.getElementById("1");
  var two = document.getElementById("2");
  var three = document.getElementById("3");

  one.addEventListener("mouseover", oneI);
  one.addEventListener("mouseout", oneO);
  two.addEventListener("mouseover", twoI);
  two.addEventListener("mouseout", twoO);
  three.addEventListener("mouseover", threeI);
  three.addEventListener("mouseout", threeO);
  
  function oneO(){
    one.src = "https://s2contentimage.netlify.com/image-poster/ic/i28c7yo2dDj5L0e2vmQ4VRBkGY0sayO3BlEeQr3aAsnQPGA8tyeUt6oaIogR.png";
  }

  function oneI(){
    one.src = "https://s2contentimage.netlify.com/image-poster/9i/8ZbYtnfRwKvIJgauBprZHU2Q4hpBA9RgOutDNNEbHLXoiX8CLirxkRIAfWIU.png";
  }
  function twoO(){
    two.src = "https://s2contentimage.netlify.com/image-poster/1k/IOB5GNJgZQ5US20EPR4aK3O8iWgCXUo0kVub07sxBxoEtgSrOALfkoTWuBxl.png";
  }

  function twoI(){
    two.src = "https://s2contentimage.netlify.com/image-poster/K7/eJ2oGS8iI4OuuChxUDPsnoYRqyuWSOOlKEOzbvc5vMeTKakRpgK65remyhiE.png";
  }
  function threeO(){
    three.src = "https://s2contentimage.netlify.com/image-poster/jg/N2BXYy0DpLjQNHNsbLZkQCby3axszCSU2qPVjta5DiVddvP5Jmx3Lcl4bZWI.png";
  }

  function threeI(){
    three.src = "https://s2contentimage.netlify.com/image-poster/K7/MoS8b1qtCUBbYs8N7yZGwhDzq7bkMXly6MqLtb8ZhLowLSDGE49YFp0ve9Fw.png";
  }
}