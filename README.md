# puzzlemania
Puzzle Website by wandyezj

## High level overview

Each puzzles is described in an individual .json file.
A different puzzle is displayed each day controlled by a current.puzzle.json file.
The current.puzzle.json file points to which puzzle to display from the puzzle repository.

When the site loads it loads up the current puzzle and displays it.

### Specific Details

#### web.config 

The web.config allows json files to be dynamically loaded.

#### CORS

#### Technical References

[Web Crypto Hash](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest)

[DOM Focus](https://www.w3schools.com/jsref/met_html_focus.asp)

## Puzzles

### Wordy Gurdy

This will be the first puzzle type displayed by the website due to it's relative simplicity.

The puzzle consists of:
* hint
    * a clue to the answer and the number of letters for each rhyming word.
* answer
    * a pair of rhyming words.

The site provides an input box for the user to check their answer and says correct when they are correct.


## Resources

[OneLook Dictionary Search](https://onelook.com/)