if (!localStorage.history)
    localStorage.history = JSON.stringify([{
        role: "assistant",
        content: "How can I help you today?"
    }]);

// Restore history from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const history = localStorage.getItem('history');
    if (history) {
        JSON.parse(history).forEach(({ role, content }) => {
            addMessage(content, role);
        });
        // <!-- setTimeout(()=>{ -->
        //     <!-- const messagesContainer = document.getElementById('messages'); -->
        // 	<!-- messagesContainer.scrollTop = 999999999; -->
        // <!-- },300) -->
    }
});

async function askIA() {
    const { response } = await fetch(`https://weebudesu.com/ai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            history: JSON.parse(localStorage.history).slice(1).slice(-5),
        })
    }).then(res => res.json());
    return response.choices[0].message.content;
}

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value.trim();

    if (userInput) {
        // Save user message to localStorage
        saveMessage('user', userInput);

        // Reset input field
        inputField.value = '';

        // Add user message to history
        const messageDiv = await addMessage(userInput, 'user', false);

        // Call AI
        askIA(userInput).then(response => {
            addMessage(response, 'assistant', true); // Use "assistant" as role
            saveMessage('assistant', response); // Save AI message to localStorage
        });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addMessage(content, sender, withDelay = false) {
    const messagesContainer = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    // Add message content
    const messageContentDiv = document.createElement('div');
    messageContentDiv.className = sender === 'user' ? 'user-message' : 'ai-message';

    if (withDelay) {
        const typingImg = document.createElement('img');
        typingImg.src = '/assets/typing.gif';
        typingImg.style.display = 'block';
        typingImg.classList.add('no-shadow');
        
        await sleep(Math.floor(Math.random() * 1000) + 1000);

        messageDiv.appendChild(messageContentDiv);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = 999999999; // Scroll down
        
        messageContentDiv.appendChild(typingImg);
        // Calculate delay for typing content.length letter with between 50ms and 150ms
        await sleep((Math.floor(Math.random() * 10) + 5) * content.length);
        messageContentDiv.textContent = content;
        messagesContainer.scrollTop = 999999999; // Scroll down
    }
    else {
        messageDiv.appendChild(messageContentDiv);
        messagesContainer.appendChild(messageDiv);
        messageContentDiv.textContent = content;
        messagesContainer.scrollTop = 999999999; // Scroll down
        
    }

    return messageDiv;
}

function saveMessage(role, content) {
    // Retrieve history from localStorage
    const history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
    history.push({ role, content }); // Add new message to history
    localStorage.setItem('history', JSON.stringify(history)); // Save updated history
}