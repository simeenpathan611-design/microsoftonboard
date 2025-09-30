/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Conversational language understanding model",
    description:
      "The Azure AI Language conversational language understanding service (CLU) enables you to train a model that apps can use to extract meaning from natural language.",
    url: "https://github.com/simeenpathan/conversational-language-understanding-model",
  },
  {
    title: "Open source contribution in Hacktoberfest 2023",
    description:
      "Contributed in Hacktoberfest 2023 using JAVA.",
    url: "https://github.com/simeenpathan/Hactoberfest2023",
  },
  {
    title: "Wine quality Detection",
    description:
      "AI-driven wine quality detection system using machine learning algorithms to assess and classify wine quality based on chemical properties.",
    url: "",
  },
  {
    title: "Bank Database Management using SQL",
    description:
      "Efficient bank database management system utilizing SQL for secure and organized data storage and retrieval.",
    url: "https://www.linkedin.com/posts/simeen-pathan-1a2b85210_sql-mysql-greatlearning-activity-7060463146460733440-QlaS?utm_source=share&utm_medium=member_desktop",
  },
   {
    title: "Analyze text with Azure AI Language",
    description:
      "The Azure AI Language service enables you to create intelligent apps and services that extract semantic information from text.",
    url: "https://learn.microsoft.com/en-us/users/simeenpathan-0213/achievements/print/3XDZJBQH",
  },
   {
    title: "Question answering solutions with Azure AI Language",
    description:
      "The question answering capability of the Azure AI Language service makes it easy to build applications in which users ask questions using natural language and receive appropriate answers.",
    url: "https://learn.microsoft.com/en-us/users/simeenpathan-0213/achievements/print/UFDH7NC3",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
