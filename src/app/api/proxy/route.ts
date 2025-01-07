import {EventFormData} from "@/types/types";
import {NextRequest, NextResponse} from "next/server";
import {generateIdeas} from "../generateIdea";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formData } = body;
    
    const ideas = await generateIdeas(formData as EventFormData);
    
    return NextResponse.json({ response: ideas });
  } catch (error) {
    console.error("Error in proxy route handler:", error);
    return NextResponse.json(
      { error: "Failed to generate ideas" },
      { status: 500 }
    );
  }
}