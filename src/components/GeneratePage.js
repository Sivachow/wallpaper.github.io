import React from 'react';
import './GeneratePage.css'; // Create this CSS file for styling

const GeneratePage = () => {
  // State to hold input values and generated image
  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');
  const [input3, setInput3] = React.useState('');
  const [input4, setInput4] = React.useState('');
  const [generatedImage, setGeneratedImage] = React.useState(null);

  // Function to handle image generation and download
  const handleGenerate = () => {
    const generatedImageURL = 'path_to_generated_image.png';
    setGeneratedImage(generatedImageURL);
  };

  return (
    <div className="generate-container">
      <div className="details">
        <h2>Generate Your Image</h2>
        <p>Enter the following details to generate your image:</p>
      </div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Name and Adjective"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Device (iphone, Macbook)"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <input
          type="text"
          placeholder="HD/ Ultra HD / 4K"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Colors (Red, Blue)"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>
      {generatedImage && (
        <div className="generated-image">
          <img src={generatedImage} alt="Generated" />
          <a href={generatedImage} download>
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default GeneratePage;
