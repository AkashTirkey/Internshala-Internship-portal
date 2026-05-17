import Styles from "../styles/FilterSidebar.module.css";

const FilterSidebar = ({ filters, setFilters }) => {
  return (
    <div className={Styles.sidebar}>

      <h2>Filters</h2>

      {/* Profile */}

      <input
        type="text"
        placeholder="Profile"
        value={filters.profile}
        onChange={(e) =>
          setFilters({
            ...filters,
            profile: e.target.value,
          })
        }
      />

      {/* Location */}

      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) =>
          setFilters({
            ...filters,
            location: e.target.value,
          })
        }
      />

      {/* Duration */}

      <select
        value={filters.duration}
        onChange={(e) =>
          setFilters({
            ...filters,
            duration: e.target.value,
          })
        }
      >
        <option value="">Duration</option>
        <option value="1 Month">1 Month</option>
        <option value="3 Months">3 Months</option>
        <option value="6 Months">6 Months</option>
      </select>

      {/* Stipend */}

      <input
        type="number"
        placeholder="Minimum Stipend"
        value={filters.stipend}
        onChange={(e) =>
          setFilters({
            ...filters,
            stipend: e.target.value,
          })
        }
      />

    </div>
  );
};

export default FilterSidebar;