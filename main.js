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

// Set up the puzzle based on the current puzzle
function setupPuzzle(puzzle) {
    // Load up latest puzzle

    // Set the puzzle information
    const hint = puzzle.hint;
    const answer = puzzle.answer;
    const total_letters = answer.length;
    
    // figure out how many letters per word.
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

function loadPuzzle(puzzle_name) {

    // Construct the path to the puzzle
    const file_name = puzzle_name + ".puzzle.json";
    const data_path = "./data/puzzles/";

    const file_path = data_path + file_name; 

    // set up the worker to retrieve the puzzle object 
    // json file to object fetcher
    const worker = new Worker("load-json-file-worker.js");

    worker.onmessage = function(e) {
        setupPuzzle(e.data);
    };

    worker.postMessage(file_path);
}

function getLatestPuzzleName() {
    // this is loaded from a separate javascript file
    return current_puzzle.name;
}

// When all the HTML controls load, set up the puzzle.
window.onload = loadPuzzle(getLatestPuzzleName());