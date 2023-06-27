let images = document.querySelectorAll(".image");

// console.log(images)

let selectedDiv=null;

function handleDragStart(){
  selectedDiv=this;
  this.classList.add("selected");
}

function handleDragOver(event){
    event.preventDefault();
    // console.log(event);
}

function handleDrop(e) {
  if (selectedDiv !== this) {
    let temp = window.getComputedStyle(selectedDiv).backgroundImage;
    selectedDiv.style.backgroundImage = window.getComputedStyle(this).backgroundImage;
    this.style.backgroundImage = temp;

    // Not Working
    // let temp = selectedDiv.style.cssText;
    // selectedDiv.style.cssText=this.style.cssText;
    // this.style.cssText= temp;
  }
  selectedDiv.classList.remove('selected');
  selectedDiv = null;
}



function doDrag(){
  images.forEach((item)=>{
    item.addEventListener('dragstart',handleDragStart)
    item.addEventListener('dragover',handleDragOver)
    item.addEventListener('drop',handleDrop)
  })
}


doDrag()