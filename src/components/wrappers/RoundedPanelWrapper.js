const RoundedPanelWrapper = ({ children }) => {
  return (
    <div className=" rounded-xl overflow-hidden drop-shadow-md">
      {children}
    </div>
  );
};

export default RoundedPanelWrapper;