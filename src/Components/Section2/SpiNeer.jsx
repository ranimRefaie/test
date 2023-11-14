import "./Section.css";

const SpiNeer = ({ className }) => {
  return (
    <div className={className}>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SpiNeer;
