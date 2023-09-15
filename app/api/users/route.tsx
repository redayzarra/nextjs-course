import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "ReDay" },
    { id: 2, name: "Josh" },
    { id: 3, name: "Mark" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json(
      { error: "Name is required! Please try again." },
      { status: 400 }
    );
  }

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
