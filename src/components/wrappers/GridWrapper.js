const GridWrapper = ({ cols, children }) => {
  // force tailwind to load these
  const gridColsClassnames = [
    "grid-cols-1",
    "grid-cols-2", // default
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
  ];

  let gridCols = gridColsClassnames[1]; // default: grid-cols-2
  if (cols) {
    if (cols <= 1) {
      gridCols = gridColsClassnames[0];
    } else if (cols >= 5) {
      gridCols = gridColsClassnames[gridColsClassnames.length - 1];
    } else {
      gridCols = gridColsClassnames[cols - 1];
    }
  }

  return <ul className={`grid ${gridCols} gap-0.5`}>{children}</ul>;
};

export default GridWrapper;
