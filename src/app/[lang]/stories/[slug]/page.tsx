import InnerPage from "@/appPages/Stories/InnerPage";

interface IProps {
  params: Promise<{ slug: string }>;
}

export default async function HelpDetailPage(props: IProps) {
  const params = await props.params;
  const { slug } = params;

  return (
    <InnerPage param={slug} />
  );
};
