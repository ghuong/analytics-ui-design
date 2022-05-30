const ButtonGroup = ({ selections, selectedIndex, onSelect }) => {
  const buttons = selections.map((selection, idx) => {
    const buttonColor = idx === selectedIndex ? "bg-gray-100" : "bg-white";
    return (
      <button
        className={`${buttonColor} py-1 px-3 text-xl`}
        value={idx}
        key={selection}
        onClick={onSelect}
      >
        {selection}
      </button>
    );
  });

  return (
    <div className="inline-block border-2 border-gray-200 rounded-xl overflow-hidden drop-shadow-sm">
      <div className="flex gap-0.5 bg-gray-200">{buttons}</div>
    </div>
  );
};

export default ButtonGroup;
