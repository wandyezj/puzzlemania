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
    // Load up latest puzzle

    // Set the puzzle information
}

function getLatestPuzzleName() {
    return current_puzzle.name;
}


function loadPuzzle(puzzle_name) {
    console.log(puzzle_name);

    const worker = new Worker("worker.js");

    worker.onmessage = function(e) {
        console.log("Message received from worker");
        console.log(e.data);
    };

    const file_path = "./data/puzzles/cannonical.puzzle.json";
    //worker.postMessage("Message to worker: Hello!");
    worker.postMessage(file_path);
}


