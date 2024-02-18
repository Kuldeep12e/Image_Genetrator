# AI Image Generator

The AI Image Generator is a JavaScript project that leverages the ChatGPT Image API to generate images based on user prompts. With this application, users can input prompts, such as "mountains," "cats," or "city skyline," and the AI will fetch and display relevant images sourced from the web.

## Features

- **Dynamic Image Generation:** Users can input prompts, and the application fetches and displays images related to the input using the ChatGPT Image API.
- **Customizable Image Quantity:** Users can specify the number of images to be generated for a given prompt.
- **Interactive User Interface:** The application provides a user-friendly interface for submitting prompts and viewing the generated images.

## Technologies Used

- **JavaScript:** The core programming language used for the project.
- **HTML:** Markup language for creating the structure of the web application.
- **CSS:** Styling language for designing the user interface and layout of the application.
- **ChatGPT Image API:** API used for fetching relevant images based on user prompts.

## Setup and Usage

To use the AI Image Generator, follow these steps:

1. Clone the repository to your local machine using the following command:
   ```
   
   ```

2. Navigate to the project directory:
   ```
   cd AI-Image-Generator
   ```

3. Open the `index.html` file in your web browser.

4. In the input field provided, enter a prompt for the type of images you want to generate (e.g., "beach," "dogs," "space exploration").

5. Optionally, specify the number of images you want to generate for the given prompt.

6. Press the submit button to generate and display the images.

## API Key Configuration

To use the ChatGPT Image API, you need to obtain an API key from the OpenAI website. Once you have the API key, replace the placeholder `apiKey` variable in the `generateAiImage` function in the `script.js` file with your actual API key.

```javascript
const apiKey = 'YourApiKeyHere'; // Replace 'YourApiKeyHere' with your actual API key
```

## Credits

- **OpenAI:** For providing the ChatGPT Image API used in this project.
- **Pexels:** For providing the image database accessed through the ChatGPT Image API.


