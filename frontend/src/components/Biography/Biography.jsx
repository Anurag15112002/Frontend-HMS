import React from "react";
import './Biography.css';

const sections = [
  {
    heading: "Our Mission",
    content: [
      "Exceptional Healthcare: Dedicated to providing high-quality healthcare services with compassion and innovation.",
      "Patient-Centered Care: Focused on enhancing the well-being of our community through comprehensive and personalized medical care."
    ],
    imgSrc: "mission.png"
  },
  {
    heading: "Our Vision",
    content: [
      "Leading Health Provider: Strive to be the leading healthcare provider recognized for excellence in clinical outcomes and patient satisfaction.",
      "Community Wellness: Committed to improving the overall health and wellness of our community through preventive care and health education."
    ],
    imgSrc: "vision.png"
  },
  {
    heading: "Our Values",
    content: [
      "Integrity: Uphold the highest standards of ethics and professionalism in all we do.",
      "Innovation: Embrace cutting-edge technology and practices to improve patient care.",
      "Collaboration: Foster a team-oriented environment that values the contributions of all healthcare professionals.",
      "Excellence: Pursue continuous improvement and excellence in all aspects of healthcare delivery."
    ],
    imgSrc: "values.png"
  },
  {
    heading: "Our Services",
    content: [
      "Comprehensive Care: Offering a wide range of medical services including primary care, specialty care, emergency services, and surgical procedures.",
      "Advanced Facilities: Equipped with state-of-the-art medical technology and modern facilities to ensure the best possible care.",
      "Specialized Programs: Providing specialized programs such as cardiac care, oncology, maternity services, and rehabilitation."
    ],
    imgSrc: "services.png"
  },
  {
    heading: "Our Team",
    content: [
      "Experienced Professionals: Our team consists of highly qualified doctors, nurses, and healthcare professionals dedicated to patient care.",
      "Ongoing Education: Commitment to continuous education and training to keep our staff updated with the latest medical advancements.",
      "Patient Advocacy: Advocating for our patients’ health and well-being, ensuring they receive the best care possible."
    ],
    imgSrc: "team.png"
  },
  {
    heading: "Patient Experience",
    content: [
      "Personalized Care: Tailoring our healthcare services to meet the unique needs of each patient.",
      "Comfort and Safety: Creating a safe, welcoming, and comfortable environment for all patients and their families.",
      "Patient Feedback: Encouraging and valuing patient feedback to improve our services continually."
    ],
    imgSrc: "experience.png"
  },
  {
    heading: "Community Involvement",
    content: [
      "Health Education: Offering community health education programs to promote healthy living and disease prevention.",
      "Outreach Programs: Engaging in outreach programs to provide healthcare services to underserved populations.",
      "Partnerships: Collaborating with local organizations and institutions to enhance community health initiatives."
    ],
    imgSrc: "community.png"
  },
];

const Biography = () => {
  return (
    <div className="about-us">
      {sections.map((section, index) => (
        <div className={`section ${index % 2 === 0 ? 'left-image' : 'right-image'}`} key={index}>
          <img src={section.imgSrc} alt={section.heading} className="section-image" />
          <div className="section-content">
            <h2>{section.heading}</h2>
            {section.content.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Biography;