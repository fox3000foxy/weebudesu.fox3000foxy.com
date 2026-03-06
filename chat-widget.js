const chatWidget = document.getElementById('chat-widget');
const chatWindow = document.getElementById('chat-window');
const closeBtn = document.getElementById('close-btn');
const trashIcon = document.getElementById('trash-icon');

chatWidget.addEventListener('click', () => {
    chatWidget.style.display = 'none';
    chatWindow.style.display = 'block';
    document.getElementById('chat-iframe').src = '/support';
});

// Mobile handler
// chatWidget.addEventListener('touchstart', () => {
//     chatWidget.style.display = 'none';
//     chatWindow.style.display = 'block';
//     document.getElementById('chat-iframe').src = '/support';
// });

closeBtn.addEventListener('click', () => {
    chatWidget.style.display = 'block';
    chatWindow.style.display = 'none';
});

// closeBtn.addEventListener('touchstart', () => {
//     chatWidget.style.display = 'block';
//     chatWindow.style.display = 'none';
// });

trashIcon.addEventListener('click', () => {
    localStorage.history = [];
    document.getElementById('chat-iframe').src = '/support';
});

// trashIcon.addEventListener('touchstart', () => {
//     localStorage.history = [];
//     document.getElementById('chat-iframe').src = '/support';
// });