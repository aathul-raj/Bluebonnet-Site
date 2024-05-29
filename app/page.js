'use client'
import Header from "./components/header/header";
import { useState } from 'react';
import LandingImage from "../public/Landing_Image.svg";
import styles from "./page.module.css";
import Image from "next/image";
import Crayon from "../public/Crayon.svg";
import Painting from "../public/Painting.svg";
import Tools from "../public/Tools.svg";
import Arrow from "../public/Arrow.svg";
import Headshot from "../public/Headshot.svg";
import smallLogo from "../public/smallLogo.png";
import Stars from "../public/Stars.svg";
import Expertise from "../public/Expertise.svg";
import ContactImage from "../public/Contact_Image.svg";
import Footer from "./components/footer/footer";
import ContactChild from "../public/contactChild.svg";

export default function Home() {
  const [successMessage, setSuccessMessage] = useState('');
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
  
    if (response.ok) {
      setSuccessMessage('Thank you for your message. We will get back to you soon!');
      event.target.reset();
    } else {
      console.error('Error submitting form');
    }
  }

  return (
    <>
      <Header />
      <main className={styles.homeContainer}>
        <Image src={Crayon.src} alt="Crayon" width={80} height={80} className={styles.crayon}/>
        <Image src={Painting.src} alt="Painting" width={80} height={80} className={styles.painting}/>
        <Image src={Tools.src} alt="Tools" width={80} height={80} className={styles.tools}/>

        <div className={styles.landingContainer}>
          <div className={styles.landingText}>
            <h1><span className={styles.blueText}>Unleashing<br/>  Potential,</span> 
            <br/><span className={styles.blueText}>Empowering <br/>Success</span></h1>
            <p>Unlocking every child&apos;s unique potential<br/> through comprehensive evaluations and<br/> personalized support for students<br/> with special needs.</p>
            <button className={styles.servicesButton}>Our Services</button>
          </div>
          <div className={styles.landingImageContainer}>
            <Image src={LandingImage.src} alt="Children in school" fill/>
          </div>
        </div>

        <div className={styles.scrollArrow}>
            <Image src={Arrow.src} alt="Array" width={20} height={20} className={styles.scrollDownImage}/>
        </div>

        <div className={styles.storyContainer}>
          
          <div className={styles.storyContainerText}>
            <h2><span className={styles.blueText}>Our Story</span></h2>
            <p className={styles.desktopText}>Bluebonnet Assessment & Services, LLC was founded by Dr. Kidd,<br/> an experienced Bilingual Educational Diagnostician, who has a<br/> passion for serving the special education community.</p>
            <p className={styles.mobileText}>Bluebonnet Assessment & Services, LLC was founded by Dr. Kidd,
an experienced Bilingual Educational Diagnostician, who has a
passion for serving the special education community.</p>
          </div>

          <Image src={ContactImage.src} alt="Headshot" width={400} height={400} className={styles.storyImage}/>
        </div>

        <div className={styles.missionContainer}>
          <div className={styles.missionContainerText}>
            <div className={styles.missionHeaderContainer}>
              <h2><span className={styles.blueText}>The Bluebonnet Way</span></h2>
              <Image src={Stars.src} alt="Stars" width={100} height={100} className={styles.starImage}/>
            </div>
            <p className={styles.desktopText}>We were created in order to provide educational contracted services to school districts in<br/> need of special education support. Our staff is passionate about ensuring students with<br/> special needs receive remarkable developmental and learning opportunities. <br/>We are prepared to assist with the current staffing shortages within our special education<br/> departments. Furthermore, we are committed to providing high quality and prompt work<br/> while adhering to state and federal guidelines.</p>
            <p className={styles.mobileText}>We were created in order to provide educational contracted services to school districts in need of special education support. Our staff is passionate about ensuring students with special needs receive remarkable developmental and learning opportunities. <br/><br/>We are prepared to assist with the current staffing shortages within our special education departments. Furthermore, we are committed to providing high quality and prompt work while adhering to state and federal guidelines.</p>
          </div>
          <Image src={smallLogo.src} alt="Logo" width={200} height={200} className={styles.blueBonnetImage}/>
        </div>

        <div className={styles.expertiseContainer}>
          <Image src={Expertise.src} alt="Headshot" width={500} height={500} className={styles.expertImage}/>
          <div className={styles.expertiseContainerText}>
            <h2><span className={styles.blueText}>Areas Of Expertise</span></h2>
            <div className={styles.servicesText}>
              <p>Our experienced staff specializes in monolingual and bilingual educational and<br/>
                  individualized program planning along with completing comprehensive full and<br/> individual evaluations. 
                  Services include, but are not limited to, evaluations in the<br/> areas of:</p>
              <ul>
                <li>Specific Learning Disability</li>
                <li>Dyslexia and Dysgraphia</li>
                <li>Speech and Language Disorders</li>
                <li>Developmental Delays/Intellectual Disabilities</li>
                <li>Early Childhood Play-Based Assessments </li>
                <li>Other Health Impairment</li>
                <li>Autism Spectrum Disorders</li>
                <li>Functional Vocational Evaluations</li>
                <li>Consultation Services for Special Education Staff</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.contactContainer} id="contact">
          <div className={styles.contactFormContainer}>
            <h2><span className={styles.blueText}>Contact Us</span></h2>
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            {!successMessage && <p>Fill out the form below, and we&apos;ll<br/> get back to you as soon as possible.</p>}
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className={styles.sendButton}>Send</button>
            </form>
          </div>
          <Image src={ContactChild.src} alt="Contact" width={400} height={400} className={styles.contactImage}/>
        </div>
        <Footer />
      </main>
    </>
  );
}
