const selectedImage = document.getElementById('selectedImage');
const selectedScene = document.getElementById('sceneInfoSelectedScene');
const sceneArrowSelectScene = document.getElementById('sceneArrowSelectScene');
const sceneArrowSelectNextScene = document.getElementById('sceneArrowSelectNextScene');

var imageUrl = "https://localhost:7215/api/Images/byType?imageType=main"
var allMinimapImagesUrl = "https://localhost:7215/api/Images/byType?imageType=minimap"
var sceneUrl = "https://localhost:7215/api/Scenes/";
console.log(selectedImage.value);

// Make an API call to fetch data
fetch(imageUrl) // Replace with your API endpoint
    .then(response => response.json())
    .then(data => {
        // Populate selectedImage with API data
        data.forEach(item => {
            console.log(item)
            const option = document.createElement('option');
            option.value = item.imageBase64;
            option.textContent = item.imageName;
            option.dataset.id = item.imageID;
            selectedImage.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Make an API call to fetch data
fetch(allMinimapImagesUrl) // Replace with your API endpoint
    .then(response => response.json())
    .then(data => {

        data.forEach(item => {
            console.log(item)
            const option = document.createElement('option');
            option.value = item.imageID;
            option.textContent = item.imageName;
            option.dataset.id = item.imageID;
            sceneInfoSelectedImage.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// Make an API call to fetch data
fetch(sceneUrl) // Replace with your API endpoint
    .then(response => response.json())
    .then(data => {
        // Populate selectedImage with API data
        data.forEach(item => {
            console.log(item)
            const option = document.createElement('option');
            option.value = item.sceneID;
            option.textContent = item.sceneName;
            option.dataset.id = item.sceneID;
            selectedScene.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// Make an API call to fetch data
fetch(sceneUrl) // Replace with your API endpoint
    .then(response => response.json())
    .then(data => {
        // Populate selectedImage with API data
        data.forEach(item => {
            console.log(item)
            const option = document.createElement('option');
            option.value = item.sceneID;
            option.textContent = item.sceneName;
            option.dataset.id = item.sceneID;
            sceneArrowSelectScene.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// Make an API call to fetch data
fetch(sceneUrl) // Replace with your API endpoint
    .then(response => response.json())
    .then(data => {
        // Populate selectedImage with API data
        data.forEach(item => {
            console.log(item)
            const option = document.createElement('option');
            option.value = item.sceneID;
            option.textContent = item.sceneName;
            option.dataset.id = item.sceneID;
            sceneArrowSelectNextScene.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

const selectedMinimap = document.getElementById('selectedMinimap');
var minimapUrl = "https://localhost:7215/api/Images/byType?imageType=minimap"
console.log(selectedMinimap.value);

// Make an API call to fetch data
fetch(minimapUrl) // Replace with your API endpoint
    .then(response => response.json())
    .then(data => {
        // Populate selectedMinimap with API data
        data.forEach(item => {
            console.log(item)
            const option = document.createElement('option');
            option.value = item.imageBase64;
            option.textContent = item.imageName;
            option.dataset.id = item.imageID;
            selectedMinimap.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

document.addEventListener("DOMContentLoaded", function () {
    const imageSelect = document.getElementById("selectedImage");
    const imagePreview = document.getElementById("imgPreview");


    imageSelect.addEventListener("change", function () {
        convertedbase64 = "data:image/jpeg;base64,".concat(imageSelect.value);
        const selectedImageOption = this.options[this.selectedIndex];
        const hiddenImageId = document.getElementById('hiddenImageId');

        if (selectedImageOption) {
            const selectedImageOptionId = selectedImageOption.dataset.id;
            hiddenImageId.textContent = selectedImageOptionId;
        } else {
            hiddenImageId.textContent = ''; // Reset hidden ID if no option is selected
        }

        imagePreview.src = convertedbase64;
        imagePreview.style.display = "block";
    });

    sceneArrowSelectScene.addEventListener("change", function () {
        debugger;
        // Remove all options from the select element
        for (var i = sceneArrowSelectNextScene.options.length - 1; i >= 0; i--) {
            var optionValue = sceneArrowSelectNextScene.options[i].value;
            if (optionValue !== "") {
                sceneArrowSelectNextScene.remove(i);
            }
        }

        // Make an API call to fetch data
        fetch(sceneUrl) // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                // Populate selectedImage with API data
                data.forEach(item => {
                    console.log(item)
                    const option = document.createElement('option');
                    option.value = item.sceneID;
                    option.textContent = item.sceneName;
                    option.dataset.id = item.sceneID;
                    sceneArrowSelectNextScene.appendChild(option);
                });
                if (sceneArrowSelectScene.value != "") {
                    var optionToRemove = sceneArrowSelectNextScene.querySelector(`[value="${sceneArrowSelectScene.value}"]`);
                    if (optionToRemove) {
                        sceneArrowSelectNextScene.removeChild(optionToRemove);
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const minimapSelect = document.getElementById("selectedMinimap");
    const minimapPreview = document.getElementById("miniMapPreview");

    minimapSelect.addEventListener("change", function () {
        convertedbase64 = "data:image/jpeg;base64,".concat(minimapSelect.value);
        const selectedMinimapOption = this.options[this.selectedIndex];
        const hiddenMinimapId = document.getElementById('hiddenMinimapId');

        if (selectedMinimapOption) {
            const selectedMinimapOptionId = selectedMinimapOption.dataset.id;
            hiddenMinimapId.textContent = selectedMinimapOptionId;
        } else {
            hiddenMinimapId.textContent = ''; // Reset hidden ID if no option is selected
        }

        minimapPreview.src = convertedbase64;
        minimapPreview.style.display = "block";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    debugger;
    var submitButton = document.getElementById('btnSubmit');
    var submitSceneInfo = document.getElementById("btnSceneInfoSubmit");
    var submitSceneArrow = document.getElementById("btnSceneArrowSubmit");

    submitButton.addEventListener('click', function () {
        const formDataObject = {
            sceneImageId: document.getElementById('hiddenImageId').textContent,
            minimapImageId: document.getElementById('hiddenMinimapId').textContent,
            sceneName: document.getElementById('txtSceneName').value,
            sceneDescription: document.getElementById('txtSceneDesc').value,
            yaw: document.getElementById('txtYaw').value,
            pitch: document.getElementById('txtPitch').value,
            fov: document.getElementById('txtFov').value,
            sceneArrows: [],
            sceneInfos: []
        };

        sendDataToAPI(formDataObject);
    });

    submitSceneInfo.addEventListener('click', function () {
        let sceneId = document.getElementById("sceneInfoSelectedScene").value;
        const formDataObject = {
            sceneInfoName: document.getElementById('txtSceneInfoName').value,
            sceneInfoDescription: document.getElementById('txtSceneInfoDesc').value,
            yaw: document.getElementById("txtInfoYaw").value,
            pitch: document.getElementById('txtInfoPitch').value
        };

        sendSceneInfoDataToAPI(formDataObject, sceneId);
    });

    submitSceneArrow.addEventListener('click', function () {
        let sceneId = sceneArrowSelectScene.value;
        const formDataObject = {
            sceneArrowName: document.getElementById("txtArrowName").value,
            nextSceneId: sceneArrowSelectNextScene.value,
            yaw: document.getElementById("txtArrowYaw").value,
            pitch: document.getElementById("txtArrowPitch").value,
            offsetYaw: document.getElementById("txtArrowOffsetYaw").value,
            offsetPitch: document.getElementById("txtArrowOffsetPitch").value,
            offsetFov: document.getElementById("txtArrowOffsetFov").value,
        };

        sendSceneArrowDataToAPI(formDataObject, sceneId);
    });
});

function sendDataToAPI(data) {
    fetch('https://localhost:7215/api/Scenes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(responseData => {
            console.log('Response from API:', responseData);
            // Handle the API response here
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
}


function sendSceneInfoDataToAPI(data, sceneId) {
    debugger;
    var url = `https://localhost:7215/api/Scenes/UpsertSceneInfoToScene/${sceneId}`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(responseData => {
            console.log('Response from API:', responseData);
            // Handle the API response here
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
}

function sendSceneArrowDataToAPI(data, sceneId) {
    debugger;
    var url = `https://localhost:7215/api/Scenes/UpsertSceneArrowToScene/${sceneId}`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(responseData => {
            console.log('Response from API:', responseData);
            // Handle the API response here
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
}




