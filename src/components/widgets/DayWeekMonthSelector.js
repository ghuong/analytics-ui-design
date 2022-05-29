const DayWeekMonthSelector = ({ selected, onSelect }) => {
  const choices = ["Day", "Week", "Month"];

  const buttons = choices.map((selection) => {
    const value = selection.toLowerCase();
    const buttonColor = value === selected ? "bg-gray-100" : "bg-white";
    return (
      <button
        className={`${buttonColor} py-1 px-3 text-xl`}
        value={value}
        key={value}
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

export default DayWeekMonthSelector;
