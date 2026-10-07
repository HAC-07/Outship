import { NextResponse } from "next/server";
import { fetchWebsite } from "@/lib/analyzer/fetchWebsite";
import { analyzeProduct } from "@/lib/analyzer/analyzeProduct";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "A valid URL is required" },
        { status: 400 }
      );
    }

    let normalizedUrl = url.trim();

    if (!normalizedUrl.startsWith("http://") && !normalizedUrl.startsWith("https://")) {
      normalizedUrl = `https://${normalizedUrl}`;
    }

    const websiteContent = await fetchWebsite(normalizedUrl);

    const analysis = await analyzeProduct(websiteContent);

    return NextResponse.json({
      success: true,
      url: normalizedUrl,
      analysis,
    });
  } catch (error) {
    console.error("Analysis error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while analyzing the website",
      },
      { status: 500 }
    );
  }
}