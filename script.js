document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value; // Get user input
    const words = inputText.split(' '); // Split the text into words

    let outputHtml = ''; // Initialize an empty string for the output HTML

    // Loop through each word and apply alternating bold and normal styles
    words.forEach((word, index) => {
        const span = `<span class="${index % 2 === 0 ? 'bold' : 'normal'}">${word} </span>`;
        outputHtml += span;
    });

    // Insert the formatted text into the outputText div
    document.getElementById('outputText').innerHTML = outputHtml;
});
