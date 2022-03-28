const AlertWindow = ({ children, title, version, subtitle }) => {
  return (
    <div className={`alert-bg`}>
      <div className="alert-window">
        <div className="alert-title">{title}</div>
        <div className="alert-subtitle">{subtitle}</div>

        {children}
      </div>
    </div>
  );
};
AlertWindow.defaultProps = {
  version: "confirm",
};
export default AlertWindow;
