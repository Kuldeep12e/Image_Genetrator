const generateForm = document.querySelector("form"); // Assuming you meant to select a form element
const gallery = document.querySelector(".gallery");

const createGallery = (data) => {
    data.forEach((imageUrl, index) => {
       const imgCard = gallery.querySelectorAll(".image-box")[index];
       const imgElement = imgCard.querySelector("img");

       imgElement.src = imageUrl;

       imgElement.onload = () =>{
        imgCard.classList.remove("loading");
       }
       
    });
};

const generateAiImage = async (userPrompt, userImage) => {
    try {
        const apiKey = '4lLE4JXdBBLWvAJxMnm0IiJzmoSPqmORIorh31FNkVQidR9DCPWsFXFZ';
        const response = await fetch(`https://api.pexels.com/v1/search?query=${userPrompt}&per_page=${parseInt(userImage, 10)}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        const data = await response.json();
        console.log(data);
        const imageUrls = data.photos.map(photo => photo.src.original);
        createGallery(imageUrls);
    } catch (error) {
        console.log(error);
    }
};

const handleFormSubmission = (e) => {
    e.preventDefault();
    
    const userPrompt = e.target[0].value;
    const userImage = e.target[1].value;

    const imgCardMarkup = Array.from({ length: parseInt(userImage, 10) }, () =>
        ` <div class="image-box loading">
        <img src="./images/loader.svg" alt="">
        <a href="#" class="download-btn">
          <img src="./images/download.svg" alt="">
        </a>
      </div>`
    );

    gallery.innerHTML = imgCardMarkup.join(''); // Added .join('') to convert the array into a string
    generateAiImage(userPrompt, userImage);
};

generateForm.addEventListener("submit", handleFormSubmission);
