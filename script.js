// Set the date we're counting down to
var countDownDate = new Date("Dec 16, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.querySelector(".timer").innerHTML =
    days + "D " + hours + "H " + minutes + "M " + seconds + "S ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

setInterval(() => {
  const colors = [
    "#9733ee",
    "#da22ff",
    "#9733ee",
    "#da22ff",
    "#5FC3E4",
    "#E55D87",
  ];
  let body = document.querySelector("body");

  let colorOne = colors[+(Math.random() * 6).toFixed()];
  let colorTwo = colors[+(Math.random() * 6).toFixed()];

  while (colorOne === colorTwo) {
    colorOne = colors[+(Math.random() * 6).toFixed()];
    colorTwo = colors[+(Math.random() * 6).toFixed()];
  }

  let direction = +(Math.random() * 360).toFixed();

  body.style.background = `linear-gradient(${direction}deg, ${colorOne}, ${colorTwo})`;
}, 900);
