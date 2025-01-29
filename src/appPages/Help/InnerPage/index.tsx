import './index.css';

export default function InnerPage({ item }: { item: any }) {
  return (
    <div className="help-inner-page-holder page">
      <h2 className="page-title">{item.title}</h2>
      <div className="help-inner-page">
        <img src={item.imageSrc} alt={item.title}/>
        <p className="help-inner-description">{item.description}</p>
      </div>
    </div>
  );
};
