const canvas = document.querySelector('#jscanvas');
const ctx = canvas.getContext('2d');
const range = document.querySelector('#jsrange');
const colors =document.querySelectorAll('.color');
const fillBtn = document.querySelector('.fill');
const saveBtn = document.querySelector('.save');
//캔버스위의 마우스 좌표 선언및 할당해주기
//캔버스에 그림그리는 속성 알아보기
//마우스가 클릭이벤트 발생시 좌표 x,y를 
ctx.strokeStyle = 'black';
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

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

function changeColor(event){ 
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  
  if(filling){
    ctx.rect(0,0,700,700);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

function handleCm(event){
  console.log(event);
  event.preventDefault();
}

function changeBtnName(event){
  if(fillBtn.textContent === 'FILL'){
    fillBtn.textContent = 'PAINT';
    filling = false;
  }else{
    fillBtn.textContent = 'FILL';
    filling = true;
  }
}

function saveImg(event){
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.download = image;
  console.log(link)
}

if(canvas){
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', onMouseLeave);
  canvas.addEventListener('contextmenu', handleCm);

}

fillBtn.addEventListener('click', changeBtnName);
saveBtn.addEventListener('click', saveImg);

Array.from(colors).forEach(changecolors => changecolors.addEventListener('click',changeColor))