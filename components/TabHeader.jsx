export default ({ children, onClick }) => {
  return (
    <div className="tab-header" onClick={onClick}>
      {children}
    </div>
  );
};
