document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll('.letter');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const letterText = document.getElementById('letter-text');
    const closeBtn = document.querySelector('.close');
    const audioElement = document.getElementById('audio');

    letters.forEach(letter => {
        letter.addEventListener('mouseover', function () {
            const gifPath = this.getAttribute('data-gif');
            this.style.backgroundImage = `url(${gifPath})`;
            this.style.backgroundSize = 'cover';
        });

        letter.addEventListener('mouseout', function () {
            this.style.backgroundImage = 'none';
        });

        letter.addEventListener('click', function () {
            const gifPath = this.getAttribute('data-gif');
            const audioPath = this.getAttribute('data-audio');
            const letterValue = this.innerText; // Get the letter value


            modalContent.src = gifPath;
            modal.style.display = 'block';
            letterText.innerText = letterValue; // Set the letter text
            modalContent.classList.add('fade-in');

            // Play the corresponding audio
            if (audioPath) {
                audioElement.src = audioPath;
                audioElement.play();
            }
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        audioElement.pause();
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            audioElement.pause();
        }
    });
});
