import { ActivityData, EventFormData } from "@/types/types";

// export async function generateIdeasViaProxy(formData: EventFormData): Promise<ActivityData[]> {
//     try {
//         console.log("calling proxy from generateIdeasViaProxy");
        
//         const response = await fetch("/api/proxy", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ formData }),
//         });


//         if (!response.ok) {
//             console.log("response: ", response);
            
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data.response as ActivityData[];
//     } catch (error) {
//         console.error("Error calling proxy route:", error);
//         return [];
//     }
// }
export async function generateIdeasViaProxy(formData: EventFormData): Promise<ActivityData[]> {
  try {
    console.log("calling proxy from generateIdeasViaProxy");
    // Fix: Use the correct API route path
    const response = await fetch("/api/proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    if (!response.ok) {
      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response as ActivityData[];
  } catch (error) {
    console.error("Error calling proxy route:", error);
    throw error; // Re-throw the error instead of returning empty array
  }
}
