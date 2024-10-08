// topic: api's                           Sep 08, 2024

/*
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {

    const url = request.nextUrl;

    if(url.searchParams.has('name')) {
        const name = url.searchParams.get('name');
        return NextResponse.json({ message: `Hello, from: ${name}` });
    }
    else {
        return new NextResponse('Please send your name in search parameter "name"');
    }
}
*/







import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    From: "Zia",
    Message: "Greetings from Pakistan",
    RequestType: "GET",
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();

  if (req.name) {
    return NextResponse.json({
      To: req.name,
      Message: "All well here",
      RequestType: "POST",
    });
  } else {
    return new NextResponse("Please include your name in the POST request");
  }
}

export async function PUT(request: NextRequest) {
  const req = await request.json();

  if (req.name) {
    return NextResponse.json({
      To: req.name,
      Message: "This is a updated greeting",
      RequestType: "PUT",
    });
  } else {
    return new NextResponse("Please include your name in the PUT request");
  }
}

export async function DELETE(request: NextRequest) {

  return NextResponse.json({
    To: "Zia",
    Message: "I have deleted the greetings",
    RequestType: "DELETE",
  });
}