var img=document.querySelectorAll('.image');
var next=document.querySelector('.next');
var prev=document.querySelector('.previous')
var text=document.querySelectorAll('.text');
var total= img.length;
var koll= text.length;
var i =0;
var a=0;

function first(){
    img[i].classList.remove('active');
    i = (i+1)% total;
    img[i].classList.add('active');
    console.log(i);
}
function second(){
    img[i].classList.remove('active');
    i = (i-1+total)%total;
    img[i].classList.add('active');
    console.log(i);
}
next.addEventListener('click',function(){
  text[a].classList.remove('active');
  a =(a+1)% koll;
  text[a].classList.add('active');
})
prev.addEventListener('click',function(){
    text[a].classList.remove('active');
    a =(a-1+koll)%koll;
    text[a].classList.add('active');
})

