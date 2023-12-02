import { getAuthSession } from "../../../utils/auth";
import prisma from "../../../utils/connect";
import { NextResponse } from "next/server";
 
// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const {searchParams} = new URL(req.url)
  const params = searchParams.get("postSlug")
  try{
    const comment = await prisma.comment.findMany(
      {
        where:{
          ...(params && {postSlug: params})
        },
        include:{user:true}
      }
    )

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  }catch(err)
  {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
  
};

// CREATE A COMMENT
export const POST = async (req) => {

  const session =await  getAuthSession();
 
  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body,userEmail:session.user.email },
    });

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};