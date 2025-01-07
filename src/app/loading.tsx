"use client";

import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-100 dark:bg-gray-900">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
                <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
};

export default Loading;
