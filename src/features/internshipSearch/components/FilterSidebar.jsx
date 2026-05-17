import { useState } from "react";
import Styles from "../styles/FilterSidebar.module.css";

const FilterSidebar = ({ filters, setFilters,profileOptions, locationOptions }) => {

  const [showProfile, setShowProfile] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  return (
    <div className={Styles.sidebar}>

      <h2>Filters</h2>

      {/* Profile */}

      <div className={Styles.inputBox}>
  <input
    type="text"
    placeholder="Profile"
    value={filters.profile}
    onClick={() => setShowProfile(true)}
    onChange={(e) =>
      setFilters({
        ...filters,
        profile: e.target.value,
      })
    }
  />

  {showProfile && (
    <ul className={Styles.dropdown}>
      {profileOptions
        ?.filter((item) =>
          item.toLowerCase().includes(filters.profile.toLowerCase())
        )
        .slice(0, 8)
        .map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              setFilters({
                ...filters,
                profile: item,
              });
              setShowProfile(false);
            }}
          >
            {item}
          </li>
        ))}
    </ul>
  )}
</div>

      {/* Location */}

      <div className={Styles.inputBox}>
  <input
    type="text"
    placeholder="Location"
    value={filters.location}
    onClick={() => setShowLocation(true)}
    onChange={(e) =>
      setFilters({
        ...filters,
        location: e.target.value,
      })
    }
  />

  {showLocation && (
    <ul className={Styles.dropdown}>
      {locationOptions
        ?.filter((item) =>
          item.toLowerCase().includes(filters.location.toLowerCase())
        )
        .slice(0, 8)
        .map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              setFilters({
                ...filters,
                location: item,
              });
              setShowLocation(false);
            }}
          >
            {item}
          </li>
        ))}
    </ul>
  )}
</div>

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