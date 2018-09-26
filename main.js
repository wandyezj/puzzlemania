const g_elements = {};


function checkAnswer() {
    const input = g_elements.input;
    const output = g_elements.output;

    const value = input.value;
    const max_length = input.maxLength;

    const answer = g_elements.answer;

    if (value.length === max_length) {
        
        const matches = value === answer;

        if (matches) {
            output.style.visibility = "visible";
            input.readOnly = true;
        }

    }
}



function getLatestPuzzleName() {
    return current_puzzle.name;
}


function loadPuzzle(puzzle_name) {
    console.log(puzzle_name);

    // Construct the path to the puzzle
    const file_name = puzzle_name + ".puzzle.json";
    const data_path = "./data/puzzles/";

    const file_path = data_path + file_name; 

    const worker = new Worker("worker.js");

    worker.onmessage = function(e) {
        console.log("Message received from worker");
        console.log(e.data);
        setupPuzzle(e.data);
    };

    //worker.postMessage("Message to worker: Hello!");
    worker.postMessage(file_path);
}


// Set up the puzzle based on the current puzzle
function setupPuzzle(puzzle) {
    // Load up latest puzzle

    // Set the puzzle information
    const hint = puzzle.hint;
    const answer = puzzle.answer;
    const total_letters = answer.length;
    
    // use coercion to figure out how many letters per word 
    const tuple = answer.split(" ");
    const letters = tuple[0].length + " " + tuple[1].length;


    // initialize global elements
    g_elements.hint = document.getElementById("puzzle-hint");
    g_elements.letters = document.getElementById("puzzle-letters");
    g_elements.input = document.getElementById("answer-input");
    g_elements.output = document.getElementById("answer-output");

    g_elements.hint.innerText = hint;
    g_elements.letters.innerText = letters;
    g_elements.input.maxLength = total_letters;
    g_elements.answer = answer;


}

// When all the HTML controls load, set up the puzzle.
window.onload = loadPuzzle(getLatestPuzzleName());