// Define the correct answers for each block (case-insensitive)
const correctAnswers = {
    'photo1.jpg': 'Answer 1',
    'photo2.jpg': 'Answer 2',
    'photo3.jpg': 'Answer 3',
    'photo4.jpg': 'Answer 4',
    'photo5.jpg': 'Answer 5',
    'photo6.jpg': 'Answer 6',
    'photo7.jpg': 'Answer 7',
    'photo8.jpg': 'Answer 8',
    'photo9.jpg': 'Answer 9'
};

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        const photo = item.getAttribute('data-photo');  // Get the image filename from the data attribute
        const correctText = correctAnswers[photo];  // Get the correct text for the clicked image

        // Show a prompt to ask the user for the correct answer
        const userInput = prompt(`Enter the answer for ${photo.replace('.jpg', '')}:`);

        // If the user enters the correct answer (case-insensitive), reveal the image
        if (userInput && userInput.trim().toLowerCase() === correctText.toLowerCase()) {
            const existingImage = item.querySelector('img');
            if (!existingImage) {
                // Create and append the image if not already added
                const img = document.createElement('img');
                img.src = `images/${photo}`;  // Path to the image inside the 'images' folder
                img.alt = "Revealed photo";
                item.appendChild(img);
            }
            // Hide the "Click to Reveal" text
            item.querySelector('::before').style.display = 'none';
        } else {
            // If the answer is incorrect, show an alert
            alert('Wrong answer. Try again!');
        }
    });
});
