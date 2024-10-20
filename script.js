document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value; // Get user input
    const words = inputText.split(' '); // Split the text into words

    let outputHtml = ''; // Initialize an empty string for the output HTML

    words.forEach((word, index) => {
        let spanClass = 'normal'; // Default class is normal
        
        // Apply alternating styles based on the index position
        if (Math.floor(index / 3) % 4 === 1) {
            spanClass = 'bold-blue'; // Bold and blue for 2nd set of 3 words
        } else if (Math.floor(index / 3) % 4 === 3) {
            spanClass = 'red'; // Red but normal for 4th set of 3 words
        }

        // Append each word to the output with the selected class
        outputHtml += `<span class="${spanClass}">${word} </span>`;
    });

    // Insert the formatted text into the outputText div
    document.getElementById('outputText').innerHTML = outputHtml;
});

// Add the reset button functionality
document.getElementById('resetButton').addEventListener('click', function() {
    // Clear the input and output areas
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerHTML = '';
});
