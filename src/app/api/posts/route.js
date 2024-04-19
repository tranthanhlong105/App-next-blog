// export const GET = async (req) => {
//   const { searchParams } = new URL(req.url);

//   const page = searchParams.get("page");
//   const cat = searchParams.get("cat");

//   const POST_PER_PAGE = 2;

//   const query = {
//     take: POST_PER_PAGE,
//     skip: POST_PER_PAGE * (page - 1),

//     where: {
//       ...(cat && { catSlug: cat }),
//     },
//   };

//   try {
//     const [posts, count] = await prisma.$transaction([
//       prisma.post.findMany(query),
//       prisma.post.count({ where: query.where }),
//     ]);
//     return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };

//test 1
// import { getAuthSession } from "@/utils/auth";
// import prisma from "@/utils/connnect";
// import { NextResponse } from "next/server";

// export const GET = async (req) => {
//   const { searchParams } = new URL(req.url);

//   const page = searchParams.get("page");
//   const cat = searchParams.get("cat");

//   const POST_PER_PAGE = 4;

//   const query = {
//     take: POST_PER_PAGE,
//     // skip: POST_PER_PAGE * (page - 1),
//      skip: POST_PER_PAGE * (page),

//     where: {
//       ...(cat && { catSlug: cat }),
//     },
//   };

//   try {
//     const [posts, count] = await prisma.$transaction([
//       prisma.post.findMany(query),
//       prisma.post.count({ where: query.where }),
//     ]);
//     return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };

//test 2
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connnect";
import { NextResponse } from "next/server";

// Biến toàn cục để lưu trữ 5 bài viết mới nhất
let latestPostsCache = [];

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 4;

  const query = {
    take: POST_PER_PAGE,
    // skip: POST_PER_PAGE * (page - 1),
    skip: POST_PER_PAGE * page,

    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  // Hàm để lấy và cache 5 bài viết mới nhất
  const cacheLatestPosts = async () => {
    try {
      const latestPosts = await prisma.post.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
      });
      latestPostsCache = latestPosts;
    } catch (error) {
      console.error("Error caching latest posts:", error);
    }
  };

  // Cache 5 bài viết mới nhất khi server khởi động
  if (latestPostsCache.length === 0) {
    await cacheLatestPosts();
  }

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
