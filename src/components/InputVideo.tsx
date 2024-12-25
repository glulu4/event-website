"use client";
import {FileVideo} from "lucide-react";
import React, {useRef, useState} from "react";

export default function InputVideo() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    function uploadVideo() {
        // Trigger the file input click
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            console.log("Selected video:", file);
        }
    }

    function handleSubmit() {
        if (selectedFile) {
            console.log("Submitting video:", selectedFile);
            // Add upload logic or other processing here
            alert(`Video "${selectedFile.name}" submitted successfully!`);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Hidden file input */}
            <input
                type="file"
                accept="video/*" // Restrict to video files only
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            {/* Upload button */}
            <button
                type="button"
                onClick={uploadVideo}
                className="flex flex-col items-center justify-center relative w-full rounded-lg border-2 border-dashed border-indigo-400 p-12 text-center hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                <FileVideo className="self-center" size={45} />
                <span className="mt-2 block text-xl font-semibold text-gray-900 dark:text-white">Upload Video</span>
                <p>{selectedFile?.name || ""}</p>
            </button>

            {/* Submit button */}
            <button
                type="button"
                onClick={handleSubmit}
                disabled={!selectedFile} // Disable if no file is selected
                className={`px-6 py-3 rounded-md text-white font-semibold ${selectedFile
                        ? "bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
            >
                Submit
            </button>
        </div>
    );
}
