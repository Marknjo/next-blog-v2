import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const envSecret = process.env.REVALIDATE_SECRET_TOKEN as string;

  if (secret !== envSecret) {
    return new NextResponse(
      JSON.stringify({
        message: 'Invalid Token',
      }),
      {
        status: 401,
        statusText: 'Unauthorized',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  const path = request.nextUrl.searchParams.get('path') || '/';

  revalidatePath(path);

  return NextResponse.json({ revalidated: true });
}
