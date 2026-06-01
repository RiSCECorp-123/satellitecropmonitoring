import "../styles/weektabs.unique.css";

const weeks = [
  
  "18.05-25.05",
  "25.05-31.05",
  "01.06-08.06",
  "09.06-16.06",
  "17.06-25.06",
  "26.07-03.07",
  "04.07-11.07"
];

const WeekTabs = () => {

  return (

    <div className="risce-week-tabs">

      {weeks.map((week, index) => (

        <button
          key={index}
          className="risce-week-tab-button"
        >
          {week}
        </button>

      ))}

    </div>
  );
};

export default WeekTabs;