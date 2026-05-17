import InternshipCard from "./InternshipCard";

const InternshipList = ({ internships }) => {
  return (
    <div>
      {internships.map((item) => (
        <InternshipCard
          key={item.id}
          internship={item}
        />
      ))}
    </div>
  );
};

export default InternshipList;