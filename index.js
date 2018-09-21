function checkAnswer(id) {
    const input = document.getElementById(id);
    const value = input.value;
    const max_length = input.maxLength;

    const answer = "fat cat";
    if (value.length === max_length) {
        if (value === answer) {
            alert('Correct!');
        }
    }
    
}