// TailwindCSS utility classnames
// SVG fill color matches current text color
const iconColors = {
  purple: "text-purple-500",
  red: "text-red-500",
  green: "text-lime-600",
  blue: "text-blue-500",
  orange: "text-orange-500",
};

// TailwindCSS utility classnames
const iconBgColors = {
  purple: "bg-purple-500/16",
  red: "bg-red-500/10",
  green: "bg-lime-600/10",
  blue: "bg-blue-500/10",
  orange: "bg-orange-500/10",
}

export const metrics = [
  {
    name: "Views",
    value: 12700,
    units: "",
    growthPercent: 2.6,
    growthPeriodInDays: 1,
    iconSrc: "./images/eye_heroicon.svg#icon",
    iconAlt: "Eye Icon", // icon alt text
    iconColor: iconColors.purple, 
    iconBgColor: iconBgColors.purple, // tailwindcss utility name
  },
  {
    name: "New Users",
    value: 1390,
    units: "",
    growthPercent: 147,
    growthPeriodInDays: 28,
    iconSrc: "./images/useradd_heroicon.svg#icon",
    iconAlt: "Add User Icon",
    iconColor: iconColors.red,
    iconBgColor: iconBgColors.red,
  },
  {
    name: "Unique Users",
    value: 1520,
    units: "",
    growthPercent: 53,
    growthPeriodInDays: 28,
    iconSrc: "./images/star_heroicon.svg#icon",
    iconAlt: "Star Icon",
    iconColor: iconColors.green,
    iconBgColor: iconBgColors.green,
  },
  {
    name: "Week 1 Retention",
    value: 4.53,
    units: "%",
    growthPercent: -10.7,
    growthPeriodInDays: 28,
    iconSrc: "./images/fire_heroicon.svg#icon",
    iconAlt: "Fire Icon",
    iconColor: iconColors.blue,
    iconBgColor: iconBgColors.blue,
  },
  {
    name: "Session",
    value: 0.9,
    units: "sec",
    growthPercent: 29,
    growthPeriodInDays: 28,
    iconSrc: "./images/clock_heroicon.svg#icon",
    iconAlt: "Clock Icon",
    iconColor: iconColors.orange,
    iconBgColor: iconBgColors.orange,
  },
];

