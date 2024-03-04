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
import image from "../images/electronic2.jpg";

const imageAltText = "circut board image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I have a Bachelor of Science, in Cybersecurity and Information Assurance from Western Governors University. I obtained my Associate of Applied Science, Secure Systems Administration & Engineering degree from the Metropolitan Community College where I also achieved my GED. I have a strong passion for all things in Cybersecurity.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Malware Analyst",
  "Open-Source intelligence Threat Hunter",
  "Security Engineer",
  "Digital Forensics Analyst",
  "Catpure-The-Flag enthusiast",
  "Programmer",
  "Tech-geek",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I have developed knowledge of Microsoft Windows, and Linux environments and become more proficient in the command line. I Have improved my scripting skills and continue to learn new techniques to become more efficient. I strive for proficiency, with a work smarter, not harder mentality, welcoming new challenges as opportunities for growth. I have is a desire to figure out how things work. My creativity and passion for learning will help me evolve with technology and develop a strong mindset as a security professional, bettering my abilities to defend and prevent security events.";

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
