import Styles from "../styles/InternshipCard.module.css";

const InternshipCard = ({ internship }) => {
  return (
    <div className={Styles.card}>

      <h2>{internship.title}</h2>

      <h3>{internship.company_name}</h3>

      <div className={Styles.details}>
        <p>
          📍{" "}
          {internship.location_names?.join(", ")}
        </p>

        <p>
          💰 {internship.stipend?.salary}
        </p>

        <p>
          ⏳ {internship.duration}
        </p>
      </div>

      <button>Apply Now</button>

    </div>
  );
};

export default InternshipCard;