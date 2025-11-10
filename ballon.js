const balloon = document.getElementById('balloon');
let size = 20;
balloon.style.fontSize = size + 'px';

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    size *= 1.1; // Inflate by 10%
    balloon.style.fontSize = size + 'px';
  } else if (event.key === 'ArrowDown') {
    size *= 0.9; // Deflate by 10%
    balloon.style.fontSize = size + 'px';
  }
});

const balloon = document.getElementById('balloon');
let size = 20;
const maxSize = 100; // Define a max size for the balloon
balloon.style.fontSize = size + 'px';

const handleKey = (event) => {
  if (event.key === 'ArrowUp') {
    size *= 1.1;
    if (size > maxSize) {
      balloon.textContent = '💥'; // Replace with explosion emoji
      window.removeEventListener('keydown', handleKey); // Remove the event listener
    } else {
      balloon.style.fontSize = size + 'px';
    }
  } else if (event.key === 'ArrowDown') {
    size *= 0.9;
    balloon.style.fontSize = size + 'px';
  }
  event.preventDefault(); // Prevent page scrolling
};

window.addEventListener('keydown', handleKey);
