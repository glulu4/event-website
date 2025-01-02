"use client"
import ActivityForm from "@/components/Form";
import LoadingIndicator from "@/components/LoadingIndicator";
import {EventFormData} from "@/types/types";
import {message} from "antd";
import {useState} from "react";

const Page = ({searchParams}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const apiUrl = process.env.NEXT_PUBLIC_GENERATE_IDEA_URL;
  const handleFormSubmit = async (formData: EventFormData) => {

    
    setIsLoading(true);
    const payload = {formData};
    console.log("payload: ", payload);
    try {
      if (!apiUrl) throw new Error("No url");
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Generated Ideas:', data);

      // Optionally display a success message
      message.success('Ideas generated successfully!');
    } catch (error) {
      console.error('Error generating ideas:', error);
      message.error('Failed to generate ideas.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-5 mb-10">
      <div>
        <h1>
          yo
        </h1>
      </div>
      <div>
        <LoadingIndicator 
        isLoading={isLoading} />
      </div>
      <div>
        <ActivityForm
          onSubmit={handleFormSubmit}
        />
      </div>

    </div>
  );
};

export default Page;
