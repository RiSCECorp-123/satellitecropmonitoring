import "../styles/weektabs.unique.css";

const WeekTabs = ({
  activeWeek,
  setActiveWeek,
  weeks
}) => {

  return (

    <div className="risce-week-tabs">

      {weeks.map((week, index) => (

        <button
          key={index}
          className={
            activeWeek === index
              ? "risce-week-tab-button active"
              : "risce-week-tab-button"
          }
          onClick={() =>
            setActiveWeek(index)
          }
        >
          {week}
        </button>

      ))}

    </div>
  );
};

export default WeekTabs;