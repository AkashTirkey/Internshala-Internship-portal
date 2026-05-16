import Styles from '../Styles/CareerLinks.module.css';

const careerData = [
  {
    title: "Internship by Places",
    links: [
      "Internship in Bangalore",
      "Internship in Delhi",
      "Internships in Hyderabad",
      "Internship in Mumbai",
      "Internship in Chennai",
      "Internship in Pune",
      "Internship in Kolkata",
      "Internship in Gurgaon",
      "Work From Home Internships",
      "View all internship",
    ],
  },

  {
    title: "Internship by Stream",
    links: [
      "Computer Science Internship",
      "Electronics Internship",
      "Mechanical Internship",
      "Civil Internship",
      "Marketing Internship",
      "Chemical Internship",
      "Finance Internship",
      "View all internship",
    ],
  },

  {
    title: "Jobs by Places",
    links: [
      "Jobs in Bangalore",
      "Jobs in Delhi",
      "Jobs in Hyderabad",
      "Jobs in Gurgaon",
      "Jobs in Kolkata",
      "Jobs in Mumbai",
      "Jobs in Pune",
      "Jobs in Chennai",
      "Jobs in Noida",
      "View all jobs",
    ],
  },

  {
    title: "Jobs by Type",
    links: [
      "Data Entry jobs",
      "Content writing jobs",
      "Digital Marketing jobs",
      "Data Science jobs",
      "Cyber Security jobs",
      "Pharma jobs",
      "Teaching jobs",
      "HR jobs",
      "MBA jobs",
      "View all jobs",
    ],
  },

  {
    title: "Fresher Jobs by Places",
    links: [
      "Fresher Jobs in Bangalore",
      "Fresher Jobs in Delhi",
      "Fresher Jobs in Hyderabad",
      "Fresher Jobs in Chennai",
      "Fresher Jobs in Pune",
      "Fresher Jobs in Mumbai",
      "Fresher Jobs in Noida",
      "Fresher Jobs in Kolkata",
      "Fresher Jobs in Gurgaon",
      "View all fresher jobs",
    ],
  },

  {
    title: "Fresher Jobs by Type",
    links: [
      "MBA Fresher Job",
      "HR Fresher Job",
      "Civil Fresher Job",
      "Digital Marketing Fresher Job",
      "Business Analyst Fresher Job",
      "Finance Fresher Job",
      "Accounts Fresher Job",
      "JAVA Fresher Job",
      "Software Testing Fresher Job",
      "View all fresher jobs",
    ],
  },

  {
    title: "Career Launchpads",
    links: [
      "Web Developer Launchpad",
      "Data Science Launchpad",
      "Digital Marketing Launchpad",
      "HR Management Launchpad",
      "View all courses",
    ],
  },

  {
    title: "Certification Courses OFFER",
    links: [
      "Full Stack Web Development with AI",
      "Programming with Python with AI",
      "Complete Digital Marketing with AI",
      "Machine Learning with AI",
      "Advanced Excel with AI",
      "AutoCAD with AI",
      "Data Science with AI",
      "Programming with C and C++ with AI",
      "Financial Modeling and Valuation with AI",
      "View all courses",
    ],
  },
];

const CareerLinks = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        {careerData.map((section, index) => (
          <div key={index} className={Styles.section}>
            <h3>{section.title}</h3>

            <div className={Styles.links}>
              {section.links.map((link, idx) => (
                <a href="#" key={idx}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerLinks;