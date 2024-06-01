window.onload = function() {
    const bears = document.querySelectorAll('.bear');
    bears.forEach((bear, index) => {
        bear.style.animationDelay = `${index * 0.5}s`;
    });
};

function showHearts(bear) {
    const hearts = document.createElement('div');
    hearts.classList.add('hearts');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.top = `${Math.random() * 100 - 50}px`;
        heart.style.left = `${Math.random() * 100 - 50}px`;
        hearts.appendChild(heart);
    }
    bear.appendChild(hearts);
    hearts.style.display = 'block';
    setTimeout(() => {
        hearts.remove();
    }, 2000);
}

function saveThoughts() {
    const thoughtsBox = document.getElementById('thoughtsBox');
    const savedThoughts = document.getElementById('savedThoughts');
    const thought = document.createElement('p');
    thought.textContent = thoughtsBox.value;
    savedThoughts.appendChild(thought);
    thoughtsBox.value = '';
}