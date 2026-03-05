document.getElementById("Search-Button").addEventListener("click", function(event) {
    event.preventDefault();
    Search();
});

function Search(){
    let inputedText = document.getElementById("Search-Bar").value;
    //Then Query the Giffy API database and find images that contain only
    // things in inputed text.
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=osbTM2twKUXM82U8Z2mR3CGHFEDQN8gV&q=${inputedText}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(response => response.json())
    .then(data => {
        // Extract GIF URLs from the response
        let html = '';
        data.data.forEach(gif => {
            const url = gif.images.fixed_height.url;
            html += `<img src="${url}" alt="GIF"/>`;
        });
        document.getElementById('Row-Column-Layout').innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}


