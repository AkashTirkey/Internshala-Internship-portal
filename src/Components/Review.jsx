import React from 'react'
import Styles from '../Styles/Review.module.css'
import Gplay from '../assets/ReviewSection/google-play.png'


// Sample reviews data
const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frontend Developer Intern",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Internshala helped me land my first internship within two weeks. The application process felt super smooth.",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "React Developer Intern",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The platform made internship hunting way less stressful. I loved the clean experience and quick responses.",
  },
  {
    id: 3,
    name: "Aman Gupta",
    role: "MERN Stack Intern",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "I improved my resume and got interview calls from multiple companies. Great for freshers starting out.",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Software Engineer Intern",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "The internship recommendations actually matched my skills. It felt like having a career compass 🧭",
  },
];

const Review = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.promotional}>
            <h2>Join the pool of 21Mn+ students and get started with your career</h2>
            <p>PLAY STORE RATING</p>
            <h3>4.4</h3>
            <img src={Gplay} alt="Google Play"/>
        </div>

        <div className={Styles.review}>
            {reviews.map((item) =>(
                <div key={item.id} className={Styles.card}>
                    <div className={Styles.profile}>
                        <img src={item.image} alt={item.name}/>

                        <div>
                            <h4>{item.name}</h4>
                            <p>{item.role}</p>
                        </div>
                    </div>

                    <div className={Styles.stars}>
                    {"⭐".repeat(item.rating)}
                    </div>
                    <p className={Styles.message}>{item.review}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Review