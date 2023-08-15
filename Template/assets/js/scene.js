const selectedImage = document.getElementById('selectedImage');
var imageUrl = "https://localhost:44391/Image/byType?imageType=main"
console.log(selectedImage.value);

// Make an API call to fetch data
fetch(imageUrl) // Replace with your API endpoint
    .then(response => response.json())
    .then(data => {
        // Populate selectedImage with API data
        data.forEach(item => {
            console.log(item)
            const option = document.createElement('option');
            option.value = item.imageBase64; // Replace with the appropriate property from your API data
            option.textContent = item.imageName; // Replace with the appropriate property from your API data
            selectedImage.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    const selectedMinimap = document.getElementById('selectedMinimap');
    var minimapUrl = "https://localhost:44391/Image/byType?imageType=minimap"
    console.log(selectedMinimap.value);
    
    // Make an API call to fetch data
    fetch(minimapUrl) // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            // Populate selectedMinimap with API data
            data.forEach(item => {
                console.log(item)
                const option = document.createElement('option');
                option.value = item.imageBase64; // Replace with the appropriate property from your API data
                option.textContent = item.imageName; // Replace with the appropriate property from your API data
                selectedMinimap.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    
