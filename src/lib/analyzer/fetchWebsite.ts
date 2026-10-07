export async function fetchWebsite(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Outship/1.0)",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch website: ${response.status}`);
    }

    const html = await response.text();

    return html;
  } catch (error) {
    console.error("Website fetch error:", error);
    throw new Error("Unable to access this website");
  }
}