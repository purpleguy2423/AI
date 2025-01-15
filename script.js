function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    if (userInput.value.trim() === '') return;

    // Create user message element
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Simulate AI response
    const aiResponse = document.createElement('div');
    aiResponse.className = 'message ai-message';
    aiResponse.textContent = 'AI: ' + getAIResponse(userInput.value);
    chatBox.appendChild(aiResponse);

    // Clear input field
    userInput.value = '';

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(userMessage) {
    // This function should be replaced with actual AI response logic
    return "This is a simulated response.";
}
