//your code here
const images = document.querySelectorAll('.image');

let currentImage = null;

// Add event listeners for drag start and drag end
images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragend', dragEnd);
});

// Add event listeners for drag over and drop
images.forEach(image => {
    image.addEventListener('dragover', dragOver);
    image.addEventListener('drop', drop);
});

// Function to handle drag start event
function dragStart(e) {
    currentImage = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', currentImage.innerHTML);
    currentImage.classList.add('selected');
}

// Function to handle drag end event
function dragEnd() {
    currentImage.classList.remove('selected');
}

// Function to handle drag over event
function dragOver(e) {
    e.preventDefault();
}

// Function to handle drop event
function drop(e) {
    e.preventDefault();

    // Swap the image content
    const draggedData = e.dataTransfer.getData('text/html');
    const droppedData = e.target.innerHTML;
    e.target.innerHTML = draggedData;
    currentImage.innerHTML = droppedData;
}