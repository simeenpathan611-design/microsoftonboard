/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a Data Science student studying at D.Y.Patil College of Engineering & Technology,Kolhapur.I am passionate about leveraging data analytics to drive informed decisions and create meaningful impact. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Science",
  "UI/UX Design",
  "Flutter",
  "Open Source Contributor",
  "Python",
  "JAVA",
  "Cybersecurity",
  "AWS",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "
I am a passionate goal-getter, thrill seeker, and idea executor currently pursuing a BTech in Computer Science with a specialization in Data Science, alongside being a Microsoft Certified Data Analyst and a Microsoft Student Ambassador. With a diverse skill set, I excel as a front-end developer proficient in HTML, CSS, JavaScript, and Flutter, while also demonstrating expertise in back-end development using C, Python, and Java.My advanced data analysis capabilities encompass tools such as Power BI, Tableau, and Advanced Excel. I am deeply driven by the potential of data analytics to drive informed decisions and create meaningful impact across various domains.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
