function checkAnswer(input_id, output_id) {
    const input = document.getElementById(input_id);
    const output = document.getElementById(output_id);

    const value = input.value;
    const max_length = input.maxLength;

    const answer = "fat cat";
    const matches = value.length === max_length && value === answer;

    if (matches) {
        output.style.visibility = "visible";
        input.readOnly = true;
    }
}

// Set up the puzzle based on the current puzzle
function setupPuzzle() {

}

function getLatestPuzzleName() {
    alert(current_puzzle.name)
}