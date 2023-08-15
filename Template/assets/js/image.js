document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('imageUpload');
    const imageInput = document.getElementById('imageInput');
    const responseDiv = document.getElementById('response');
    const currentDate = new Date();

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const selectedFile = imageInput.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = async () => {
                const base64Image = reader.result.split(',')[1];
                console.log(selectedFile.name);
                console.log(base64Image);

                var fileName = document.getElementById("txtImageName").value;
                var imageType = document.getElementById("selectedImageType").value;

                const payload = {
                    imageBase64: base64Image,
                    imageName: fileName,
                    dateAdded: currentDate,
                    isActive: true,
                    imageType: imageType
                };

                try {
                    const response = await fetch('https://localhost:44391/Image/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload),
                    });

                    if (response.ok) {
                        const responseData = await response.json();
                        responseDiv.innerHTML = `<br/><div class="alert alert-success">Image uploaded successfully.</div>`;
                        resetFields();
                    } else {
                        responseDiv.innerHTML = '<br/><div class="alert alert-danger">Error uploading image</div>';
                    }
                } catch (error) {
                    responseDiv.innerHTML = `<br/><div class="alert alert-danger">Error: ${error.message}</div>`;
                }
            };

            reader.readAsDataURL(selectedFile);
        } else {
            responseDiv.innerHTML = '<br/><div class="alert alert-danger">Please select an image</div>';
        }
    });
});

function resetFields(){
    const imageInput = document.getElementById("imageInput");
    const imagePreview = document.getElementById("imagePreview");
    const imageName = document.getElementById("txtImageName");
    const responseDiv = document.getElementById('response');
    const imageType = document.getElementById('selectedImageType');

    imageInput.value = null;
    imagePreview.src = "assets/img/reservation.jpg";
    imageName.value = null;
    imageType.value = "";

    setTimeout(() => {
        responseDiv.innerHTML = "";
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    const imageSelect = document.getElementById("selectedImage");
    const imagePreview = document.getElementById("imagePreview");

    imageSelect.addEventListener("change", function () {
        console.log(imageSelect.value);
        convertedbase64 = "data:image/jpeg;base64,".concat(imageSelect.value);

        imagePreview.src = convertedbase64;
        imagePreview.style.display = "block";
    });
});

function previewImage()
{
    var imgInput = document.getElementById("imageInput");
    var uploadedImage = document.getElementById("imagePreview");

     // Check if a file is selected
     if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        
        // When the file is loaded, update the src attribute of the image element
        reader.onload = function(event) {
            uploadedImage.src = event.target.result;
        };
        
        // Read the selected file as a data URL
        reader.readAsDataURL(imageInput.files[0]);
    }
}