let slides = document.querySelectorAll('.slide-single');
let slider = [];
for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].src;
  slides[i].remove();
}

let step = 0;
let offset = 0;
let picstep = 2;

function draw() {
  let img = document.createElement('img');
  let mealpic = document.querySelector('.mealpng');
  img.src = slider[step];
  mealpic.src = slider[picstep];
  img.classList.add('slide-single');
  img.style.top = offset*70 - 70*1.5 + 'px';
  document.querySelector('.slide').appendChild(img);
  if (picstep + 1 == slider.length) {
    picstep = 0;
  } else {
    picstep++;
  }
  if (step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
  if (offset + 1.5 == slider.length * 1.5) {
    offset = slider.length*1.5 - 1.5;
  } else {
    offset += 1.5;
  }
}

function getpic() {
  let picsrc = document.querySelector('.mealpng');
  console.log(picsrc.src);
}

function move() {
  document.onclick = null;
  let slides2 = document.querySelectorAll('.slide-single');
  let offset2 = 0;
  slides2[1].style['border-color'] = 'white';
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.top = offset2*70 - 70*1.5 - 70*1.5 + 'px';
    offset2 += 1.5;
  }
  setTimeout(function() {
    slides2[0].remove();
    slides2[2].style['border-color'] = 'red';
    slides2[2].style['border-width'] = 3 + 'px';
    draw();
    document.onclick = move;
  }, 600)
}

for (let i = 0; i < slider.length; i++) {
  draw();
}
document.onclick = move;
