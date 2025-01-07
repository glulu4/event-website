import '../../envConfig'
import {ActivityData, EventFormData} from "@/types/types";
const apiUrl = process.env.GENERATE_IDEA_URL!;

export async function generateIdeas(formData: EventFormData): Promise<ActivityData[]> {
    const payload = {formData};

        try {
            if (!apiUrl) throw new Error("API URL is not configured");

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

            return data.response as ActivityData[];
        } catch (error) {
            console.error('Error generating ideas:', error);
            return []

}
}