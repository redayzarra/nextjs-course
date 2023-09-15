import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "ReDay" },
    { id: 2, name: "Josh" },
    { id: 3, name: "Mark" },
  ]);
}
