// Keep track of all selectable items on screen
let items = document.querySelectorAll('.searchable');
let currentIndex = 0;

// Listen for hardware D-pad clicks
document.addEventListener('keydown', function(event) {
    items[currentIndex].classList.remove('active');

    if (event.key === 'ArrowDown' || event.key === 'Down') {
        if (currentIndex < items.length - 1) currentIndex++;
    } 
    else if (event.key === 'ArrowUp' || event.key === 'Up') {
        if (currentIndex > 0) currentIndex--;
    } 
    else if (event.key === 'Enter') {
        // Trigger action when remote center button is clicked
        let activeItem = items[currentIndex];
        if (activeItem.classList.contains('nav-item')) {
            document.getElementById('category-title').innerText = activeItem.innerText;
            alert("Switching portfolio view to: " + activeItem.innerText);
        }
    }

    // Apply the active focus ring to the newly selected element
    items[currentIndex].classList.add('active');
});
