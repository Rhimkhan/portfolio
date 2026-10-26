import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/Rhimkhan", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-App",
      },
      next: { revalidate: 3600 },
    });

    
    if (!res.ok) {
      // Fallback data if GitHub rate limits
      return NextResponse.json({
        public_repos: 8,
        followers: 12,
        following: 15,
        created_at: "2023-01-15T00:00:00Z",
        name: "Rhim Khan",
      });
    }

    const data = await res.json();
    return NextResponse.json({
      public_repos: data.public_repos ?? 0,
      followers: data.followers ?? 0,
      following: data.following ?? 0,
      created_at: data.created_at ?? "",
      name: data.name ?? "Rhim Khan",
      avatar_url: data.avatar_url ?? "",
      bio: data.bio ?? "",
    });
  } catch (error) {
    console.error("Failed to fetch GitHub profile:", error);
    return NextResponse.json({
      public_repos: 8,
      followers: 12,
      following: 15,
      created_at: "2023-01-15T00:00:00Z",
      name: "Rhim Khan",
    });
  }
}
