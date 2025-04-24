const overlay = document.getElementById('overlay');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
const header = document.getElementById('modalHeader');

//open modal
openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});
//close modal
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});
overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.style.display = 'none';
});

// Drag
let isDragging = false;
let offsetX, offsetY;

header.addEventListener('mousedown', e => {
    isDragging = true;
    const rect = modal.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.body.style.userSelect = 'none';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = '';
});

document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    // límites (opcional)
    const maxX = window.innerWidth - modal.offsetWidth;
    const maxY = window.innerHeight - modal.offsetHeight;
    x = Math.min(Math.max(0, x), maxX);
    y = Math.min(Math.max(0, y), maxY);
    modal.style.left = x + 'px';
    modal.style.top = y + 'px';
});