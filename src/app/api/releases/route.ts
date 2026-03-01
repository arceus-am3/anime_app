import { NextResponse } from "next/server";
import { getReleasesData } from "@/src/utils/github";

export async function GET() {
  try {
    const data = await getReleasesData();
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { versions: [], changelogs: [], totalAppDownloads: 0, lastUpdated: 0 },
      { status: 500 }
    );
  }
}
