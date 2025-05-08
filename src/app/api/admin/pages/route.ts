import { NextRequest, NextResponse } from 'next/server';
import { createOrUpdatePage } from '@/lib/firestore';

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.title || !data.slug || !data.lang || !data.content) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  await createOrUpdatePage(data);

  return NextResponse.json({ status: 'ok' });
}
