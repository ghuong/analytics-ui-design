const RoundedPanelWrapper = ({ children }) => {
  return (
    <section className="rounded-lg overflow-hidden drop-shadow-md">
      {children}
    </section>
  );
};

export default RoundedPanelWrapper;