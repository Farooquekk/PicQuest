
const search = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const imageContainer = document.querySelector(".img-container");

searchButton.addEventListener("click",async()=> {
    const val = search.value;
    
    if (val === " ") {
        alert("Please Enter a key to Search")
    }
    else {
        const key = "hKZ7G338C2A4PO080oherwF5-aYg5lChiMs42ZIVsCU"
        const url = `https://api.unsplash.com/search/photos?page=1&query=${val}&per_page=30&client_id=${key}`;

       
        let data = await fetch(url);
        data = await data.json();
        displayImages(data);
        
    }
    
});

function displayImages(data) {
    imageContainer.innerHTML = ' ';
    data.results.forEach(element => {
        console.log(element.urls.regular,"element.urls.regular");
      
        const img = document.createElement("img");
        img.src = element.urls.regular;
        img.addClass = "img-class"
    imageContainer.appendChild(img);
    });

    
}


