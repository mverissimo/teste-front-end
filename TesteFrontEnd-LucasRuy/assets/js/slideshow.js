var slideIndex = 1;
showDivs(slideIndex);

var myIndex = 0;
carousel();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("hero-slide");
  var dots = document.getElementsByClassName("hero-btn");

  if (n > x.length) {
  	slideIndex = 1
  }

  if (n < 1) {
  	slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" btn-actived", "");
  }

  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " btn-actived";
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("hero-slide");

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    
    myIndex++;

    if (myIndex > x.length) {
      myIndex = 1
    }

    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 8000);
}