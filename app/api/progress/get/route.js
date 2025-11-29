import { connectDB } from "@/lib/mongodb";
import TeamProgress from "@/models/TeamProgress";

export async function GET() {
  try {
    await connectDB();
    const data = await TeamProgress.findOne({});

    return Response.json({ success: true, data: data || {} });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
