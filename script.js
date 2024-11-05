let count = 0;
let limitEnabled = false;
let maxCount = 20;

function updateCounter() {
    document.getElementById('counter').innerText = count;
}

function increment() {
    if (!limitEnabled || count < maxCount) {
        count++;
        updateCounter();
    }
}

function decrement() {
    if (!limitEnabled || count > 0) {
        count--;
        updateCounter();
    }
}

function resetCounter() {
    count = parseInt(document.getElementById('setCount').value) || 0;
    updateCounter();
}

function setCounter() {
    count = parseInt(document.getElementById('setCount').value) || 0;
    updateCounter();
}

function toggleLimit() {
    limitEnabled = document.getElementById('limitToggle').checked;
    document.getElementById('maxCount').disabled = !limitEnabled;
}

function changeTheme(color) {
    document.body.style.backgroundColor = color;
}

function toggleSettings() {
    const settingsPanel = document.getElementById('settings');
    settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('maxCount').addEventListener('input', (event) => {
    maxCount = parseInt(event.target.value) || 20;
});
