import React, { useState } from 'react';

export default function UploadSection() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please upload a file first!');
      return;
    }

    // Example: send to backend or log the file
    console.log('Submitted file:', file);

    // You could send it to a server like this:
    // const formData = new FormData();
    // formData.append('file', file);
    // fetch('/upload-endpoint', {
    //   method: 'POST',
    //   body: formData,
    // });

    alert('File submitted successfully!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[600px] border-2 border-dashed border-[#bb9069] rounded-lg mx-auto mt-10 p-6 flex flex-col justify-center items-center gap-4 text-white text-center"
    >
      <p className='text-xl sm:text-2xl font-bold'>Upload a selfie</p>
      <p className='text-sm sm:text-base'>We'll analyze your mood from your expression</p>

      <label
        htmlFor="file-upload"
        className="bg-[#f86b06] text-white text-sm sm:text-base h-[45px] w-[120px] flex items-center justify-center rounded-md cursor-pointer hover:bg-[#e05f00] transition"
      >
        Upload
      </label>

      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        type="submit"
        className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
      >
        Submit
      </button>
    </form>
  );
}
  