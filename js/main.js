document.getElementById("Search-Button").addEventListener("click", Search);

const apiKey = 'YOUR_API_KEY_HERE';
function Search(){
    let inputedText = document.getElementById("Search-Bar").nodeValue;
    //Then Query the Giffy API database and find images that contain only
    // things in inputed text.
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=osbTM2twKUXM82U8Z2mR3CGHFEDQN8gV&q=${inputedText}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').textContent = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
    
}


