import prisma from "@/utils/connnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const category = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(category, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "something  went wrong" }, { status: 500 })
    );
  }
};
