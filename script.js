document.addEventListener('DOMContentLoaded', (e) => {
    const input = document.getElementById('input');
    input.value = '';

    input.addEventListener('input', () => {
        input.value = input.value.replace(/[^\d+\-*\/%]/g, '');
    })
    const addToInputNumberValues = (clickedValue) => {
        if (clickedValue !== "c") {
            input.value += clickedValue;
        }
    }



    const bottomContent = document.querySelector('.bottom-content');
    const numberButtons = bottomContent.querySelectorAll('[id]');
    numberButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            addToInputNumberValues(e.target.textContent);
        });
    });



    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function() {
        input.value = "";
    });
    const eraseOneChar = document.getElementById("erase");
    eraseOneChar.addEventListener("click", () => {
        input.value = input.value.slice(0, -2);
    })
    const copyButton = document.getElementById("copy");
    copyButton.addEventListener("click", () => {
        input.select();
        document.execCommand("Copy");
        alert("Copied");
    });

});