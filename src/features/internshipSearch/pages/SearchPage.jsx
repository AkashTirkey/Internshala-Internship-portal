import React, { useEffect, useState } from "react";
import Styles from "../styles/SearchPage.module.css";

import FilterSidebar from "../components/FilterSidebar";
import InternshipList from "../components/InternshipList";

const SearchPage = () => {
  // original internships from API
  const [internships, setInternships] = useState([]);

  // filtered internships
  const [filteredInternships, setFilteredInternships] = useState([]);

  // loading state
  const [loading, setLoading] = useState(true);

  // filters state
  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
    stipend: "",
  });

  // Fetch API
  useEffect(() => {
    fetch("https://internshala.com/hiring/search")
      .then((res) => res.json())
      .then((data) => {

        console.log(data);

        // Convert object into array
        const internshipsArray = Object.values(
          data.internships_meta
        );

        setInternships(internshipsArray);

        setFilteredInternships(internshipsArray);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Filtering Logic
  useEffect(() => {
    let filtered = internships.filter((item) => {

      // profile filter
      const matchesProfile =
        filters.profile === "" ||
        item.title
          ?.toLowerCase()
          .includes(filters.profile.toLowerCase());

      // location filter
      const matchesLocation =
        filters.location === "" ||
        item.location_names?.some((loc) =>
          loc
            .toLowerCase()
            .includes(filters.location.toLowerCase())
        );

      // duration filter
      const matchesDuration =
        filters.duration === "" ||
        item.duration
          ?.toLowerCase()
          .includes(filters.duration.toLowerCase());

      // stipend filter
      const stipendAmount = parseInt(
        item.stipend?.salary?.replace(/[^0-9]/g, "")
      );

      const matchesStipend =
        filters.stipend === "" ||
        stipendAmount >= parseInt(filters.stipend);

      return (
        matchesProfile &&
        matchesLocation &&
        matchesDuration &&
        matchesStipend
      );
    });

    setFilteredInternships(filtered);

  }, [filters, internships]);

  const profileOptions = [
  ...new Set(internships.map((item) => item.title).filter(Boolean)),
];

const locationOptions = [
  ...new Set(
    internships.flatMap((item) => item.location_names || [])
  ),
];

  return (
    <div className={Styles.wrapper}>

      {/* LEFT FILTER SIDEBAR */}

      <div className={Styles.filters}>
        <FilterSidebar
          filters={filters}
          setFilters={setFilters} 
          profileOptions={profileOptions}
          locationOptions={locationOptions}

        />
      </div>

      {/* RIGHT INTERNSHIP LIST */}

      <div className={Styles.list}>

  {!loading && (
    <h2 className={Styles.total}>
      {filteredInternships.length} Total Internships
    </h2>
  )}

  {loading ? (
    <h2>Loading internships...</h2>
  ) : filteredInternships.length > 0 ? (
    <InternshipList internships={filteredInternships} />
  ) : (
    <h2>No internships found</h2>
  )}

</div>
    </div>
  );
};

export default SearchPage;