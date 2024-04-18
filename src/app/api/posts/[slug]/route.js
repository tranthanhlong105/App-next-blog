import prisma from "@/utils/connnect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { view: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify({ post, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "something  went wrong" }, { status: 500 })
    );
  }
};
