import { notFound } from "next/navigation";

import InnerPage from "@/appPages/Help/InnerPage";
import { helpData } from "@/common/constants";

interface IProps {
  params: Promise<{ slug: string }>;
}

export default async function HelpDetailPage(props: IProps) {
  const params = await props.params;

  const {
    slug
  } = params;

  const decodedSlug = decodeURIComponent(slug);

  const item = helpData?.find((data) => data.title.replace(/ /g, '-') === decodedSlug);

  if (!item) {
    notFound();
  }

  return (
    <InnerPage item={item} />
  );
};
