import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, language, code, tags } = body;

    if (!title || !code || !language) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return Response.json(
        {
          error: "User not found",
        },
        { status: 404 }
      );
    }

    const snippet = await prisma.snippet.create({
      data: {
        title,
        description: description || null,
        language,
        code,
        tags: tags || [],
        userId: user.id,
      },
    });

    return Response.json({
      success: true,
      snippet: {
        id: snippet.id,
        title: snippet.title,
        language: snippet.language,
      },
    });
  } catch (error) {
    console.error("Error creating snippet:", error);
    return Response.json(
      { error: "Failed to create snippet" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const snippets = await prisma.snippet.findMany({
      where: {
        user: { email: session.user.email },
      },
      orderBy: { createdAt: "desc" },
    });

    return Response.json({ snippets });
  } catch (error) {
    console.error("Error fetching snippets:", error);
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
