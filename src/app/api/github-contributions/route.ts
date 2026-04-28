import { NextRequest, NextResponse } from "next/server";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const CONTRIBUTION_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              weekday
            }
          }
        }
      }
    }
  }
`;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Missing username parameter" }, { status: 400 });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN environment variable is not set" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: CONTRIBUTION_QUERY, variables: { username } }),
      // Cache for 6 hours — contribution data doesn't change that often
      next: { revalidate: 21600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API responded with ${res.status}` },
        { status: res.status }
      );
    }

    const json = await res.json();

    if (json.errors) {
      const msg = json.errors[0]?.message ?? "GraphQL error";
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    const calendar =
      json?.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return NextResponse.json(
        { error: `GitHub user "${username}" not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(calendar);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
