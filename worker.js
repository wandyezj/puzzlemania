function loadJsonFile(file_path) {
    const request = new XMLHttpRequest();

    // blocking call to the request.
    request.open("GET", file_path, false);
    request.send();

    const raw_data = request.responseText;

    const json_object = JSON.parse(raw_data);

    return json_object;
}

onmessage = function(e) {
    console.log("Message received from main script");
    console.log(e.data);
    //postMessage("Message from worker: Hi!");
    
    const file_path = e.data;

    const json_object = loadJsonFile(file_path);

    postMessage(json_object);

    // end the worker
    close();
}
