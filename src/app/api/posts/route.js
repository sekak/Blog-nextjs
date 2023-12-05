import prisma from "../../../utils/connect"
import { NextResponse } from "next/server"
import { getAuthSession } from "../../../utils/auth";


export const GET = async (req) => {

  const { searchParams } = new URL(req.url)
  const page = searchParams.get("page")
  const cat = searchParams.get("cat")
  const POST_PER_PAGE = 2;
  const query = {
    take: POST_PER_PAGE,
    skip: (POST_PER_PAGE * (page - 1)),
    where: 
    {
      ...(cat && { catSlug: cat })
    }
  }
  try {
    const [data, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ data, count }, { status: 200 }));
  } catch (err) {
     return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};


export const POST = async (req) => {

  const session =await getAuthSession()
     console.log("=>>>",session.user)
  try{
    const body = await req.json()
    console.log(body)
    const res = await prisma.post.create({
      data: {...body ,userEmail: session.user.email}
    })
    console.log("====>>>>>>.<<<<<<======")
     return new NextResponse(
      JSON.stringify(res, { status: 200 })
    );
   }catch(err)
   {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
   }
};