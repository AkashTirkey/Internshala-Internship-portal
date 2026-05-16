import { useState } from "react";
import Styles from "../Styles/FAQ.module.css";

const faqData = [
  {
    id: 1,
    question: "How do i search for internships in my preferred category/profile?",
    answer:
      "You can apply by creating an account, completing your profile, and clicking the apply button on internships that match your interests.",
  },
  {
    id: 2,
    question: "How can i apply for an internship on internshala",
    answer:
      "Many internships offer stipends, while some focus more on learning opportunities and experience.",
  },
  {
    id: 3,
    question: "Can freshers apply for internships?",
    answer:
      "Yes, most internships are designed specifically for students and freshers.",
  },
  {
    id: 4,
    question: "Do I get a certificate after completing an internship?",
    answer:
      "Most companies provide certificates after successful internship completion.",
  },
  {
    id: 5,
    question: "Can I apply for remote internships?",
    answer:
      "Yes, there are thousands of remote internship opportunities available across different domains.",
  },
  {
    id: 6,
    question: "How can I improve my chances of getting selected?",
    answer:
      "Build strong projects, keep your resume updated, and apply consistently to relevant opportunities.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const closeAllQuestions = () => {
    setOpenId(null);
  };

  return (
    <div className={Styles.container}>
      <h2
        className={Styles.heading}
        onClick={closeAllQuestions}
      >
        Frequently Asked Questions
      </h2>

      <div className={Styles.faqWrapper}>
        {faqData.map((item) => (
          <div key={item.id} className={Styles.faqCard}>
            <div
              className={Styles.questionSection}
              onClick={() => toggleQuestion(item.id)}
            >
              <h3>{item.question}</h3>

              <span
                className={`${Styles.arrow} ${
                  openId === item.id ? Styles.rotate : ""
                }`}
              >
                ▼
              </span>
            </div>

            {openId === item.id && (
              <p className={Styles.answer}>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;