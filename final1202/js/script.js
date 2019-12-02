createStar();

function createStar() {
  for (var i = 0; i <= 400; i++) {
    var star = this.newStar();
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.width = "2.5px";
    star.style.height = "2.5px";
    star.animation = 'none';
    document.body.appendChild(star);
  }
}

function newStar() {
  var d = document.createElement('div');
  d.innerHTML = '<div class="star">';
  return d.firstChild;
}

function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("loushise"))
    {
        element.src="img/loushi.png";
    }
    else
    {
        element.src="img/loushise.png";
    }
}


function bigImg(x) {
  x.style.height = "90%";
  x.style.width = "90%";
}

function normalImg(x) {
  x.style.height = "100%";
  x.style.width = "100%" ;
}

