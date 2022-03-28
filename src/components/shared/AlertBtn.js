const AlertBtn = ({ version, title, action, onClick }) => {
  return (
    <button className={`btn btn-${version}`} onClick={onClick}>
      {title}
    </button>
  );
};
AlertBtn.defaultProps = {
  version: "confirm",
};
export default AlertBtn;
