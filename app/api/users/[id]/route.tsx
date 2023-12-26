import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  /*if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
*/
  return NextResponse.json({ id: body.id, name: body.name, isUpdated: true });
}

export function DELETE(request: NextRequest, { params }: Props) {
  /*if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });*/

  return NextResponse.json({});
}
