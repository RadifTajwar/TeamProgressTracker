import { connectDB } from "@/lib/mongodb";
import TeamProgress from "@/models/TeamProgress";

export async function POST(req) {
  try {
    await connectDB();
    const { completedDays, completedProblems } = await req.json();

    const updated = await TeamProgress.findOneAndUpdate(
      {},
      {
        completedDays,
        completedProblems,
      },
      { upsert: true, new: true }
    );

    return Response.json({ success: true, data: updated });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
