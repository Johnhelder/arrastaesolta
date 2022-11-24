document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach(area =>{
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

//Function item
function dragStart(e){
  e.currentTarget.classList.add('dragging');
}

function dragEnd(e){
  e.currentTarget.classList.remove('dragging')
}

//Funções Area
function dragOver(e){
  if(e.currentTarget.querySelector('.item') === null){
  e.preventDefault();
  e.currentTarget.classList.add('hover');
}
}

function dragLeave(){
e.currentTarget.classList.remove('hover');
}

function drop(e){
  e.currentTarget.classList.remove('hover');
  let dragItem = document.querySelector('.item.dragging');

  if(e.currentTarget.querySelector('.item') === null){
    e.currentTarget.appendChild(dragItem);
  }
}

//Função Neutral Area
function dragOverNeutral(e){
 e.preventDefault();
 e.currentTarget.classList.add('hover');
}

function dragLeaveNeutral(){

}

function dropNeutral(){

}