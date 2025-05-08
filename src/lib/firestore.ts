import { getFirestore } from "firebase-admin/firestore";

export const db = getFirestore();

// Write a new page
export async function createOrUpdatePage(data: {
  title: string;
  slug: string;
  lang: string;
  content: string;
}) {
  const ref = db.collection('pages').doc(`${data.lang}_${data.slug}`);
  await ref.set(data);
}

// Read page by lang + slug
export async function getPage(lang: string, slug: string) {
  const ref = db.collection('pages').doc(`${lang}_${slug}`);
  const doc = await ref.get();
  if (!doc.exists) {
    return null;
  }
  return doc.data();
}

// List all pages (optional for admin list)
export async function listPages() {
  const snapshot = await db.collection('pages').get();
  return snapshot.docs.map(doc => doc.data());
}
