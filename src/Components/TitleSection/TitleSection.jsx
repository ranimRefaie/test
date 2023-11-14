import "./TitleSection.css";
const TitleSection = ({ title, desc }) => {
  return (
    <div className="Title-section">
      <h1 className="fs-2">{title}</h1>
      <p className="fs-6">{desc}</p>
    </div>
  );
};

export default TitleSection;
