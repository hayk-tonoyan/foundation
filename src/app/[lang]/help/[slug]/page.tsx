import { notFound } from "next/navigation";

import InnerPage from "@/appPages/Help/InnerPage";
import { helpData } from "@/common/constants";

export default async function HelpDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);

  const item = helpData?.find((data) => data.title.replace(/ /g, '-') === decodedSlug);

  if (!item) {
    notFound();
  }

  return (
    <InnerPage item={item} />
  );
};
