const canvas = document.querySelector('#jscanvas');
const ctx = canvas.getContext('2d');
const range = document.querySelector('#jsrange');
const colors =document.querySelector('.colorchips');
//캔버스위의 마우스 좌표 선언및 할당해주기
//캔버스에 그림그리는 속성 알아보기
//마우스가 클릭이벤트 발생시 좌표 x,y를 
ctx.strokeStyle = 'rgb(255, 124, 1)';
ctx.lineWidth = 2.5;


let painting = false;

function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x,y);
  }else{
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}

function onMouseDown(event){
  painting = true;
  ctx.lineWidth = range.value;
}
function onMouseUp(event){
  painting= false;
}
function onMouseLeave(event){
  painting= false;
}

function changeColor(event){ //적용안됨
  ctx.strokeStyle = colors.backgroundcolor;
}


if(canvas){
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', onMouseLeave);
}

colors.addEventListener('click', changeColor);