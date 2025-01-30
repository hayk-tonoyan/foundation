import './index.css';
import useHelpData from "@/hooks/useHelpData";

export default function InnerPage({ param }: { param: string }) {
  const helpData = useHelpData();

  const decodedSlug = decodeURIComponent(param);

  const item = helpData?.find((data) => data.title.replace(/ /g, '-') === decodedSlug);

  return (
    <div className="help-inner-page-holder page">
      <h2 className="page-title">{item?.title}</h2>
      <div className="help-inner-page">
        {/*@ts-ignore*/}
        <img src={item?.imageSrc} alt={item?.title}/>
        <p className="help-inner-description">{item?.description}</p>
      </div>
    </div>
  );
};
