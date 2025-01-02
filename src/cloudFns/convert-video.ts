export async function convertVideo(file: File) {
    if (!file) {
        throw new Error("No file selected");
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("video", file);

    // Send the file to the backend
    const backend:string | undefined = process.env.NEXT_PUBLIC_FB_CONVERT_URL;
    if (!backend){
      throw new Error("No backend address provided");
      
    }
    const response = await fetch(backend, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to upload video");
    }

    const result = await response.json();
    if (result.success) {
        // Display the GIF
        const gifBase64 = result.gif_base64;
        const gifUrl = `data:image/gif;base64,${gifBase64}`;

        const img = document.createElement("img");
        img.src = gifUrl;
        document.body.appendChild(img);
    } else {
        console.error("Error:", result.message);
    }
}
