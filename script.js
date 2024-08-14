document.getElementById('start-button').addEventListener('click', () => {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;

    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width += 10;
            progressBar.style.width = width + '%';
        }
    }, 500);
});
