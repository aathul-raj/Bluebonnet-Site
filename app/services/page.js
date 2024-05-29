"use client"
import { useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import styles from './services.module.css';
import RightArrow from "../../public/Right_Arrow.svg";
import ContactImage from "../../public/Contact_Image.svg";
import Image from 'next/image';

export default function Services(){
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
            <main className={styles.servicesContainer}>
                <div className={styles.servicesHeaderContainer}>
                    <h1><span className={styles.blueText}>Our Services</span></h1>
                </div>

                <div className={styles.serviceContainer}>
                    <div className={styles.serviceHeader}>
                        <Image src={RightArrow.src} alt="Arrow" width={20} height={20} />
                        <h2>Evaluation</h2>      
                    </div>
                    <div className={styles.specificService}>
                        <h2 className={styles.specificServiceHeader}>
                            Full Individual Evaluation (FIE)
                        </h2>
                        <p>
                        Our skilled team of evaluators can conduct comprehensive monolingual and
                        bilingual full and individual evaluations which include, but are not limited to,
                        evaluations in the areas of: Specific Learning Disability, Autism, Dyslexia and
                        Dysgraphia, Speech and Language Disorders/Delays, Other Health
                        Impairment and Early Childhood Play-Based Assessments.
                        </p>
                    </div>

                    <div className={styles.specificService}>
                        <h2 className={styles.specificServiceHeader}>
                        Independent Educational Evaluation (IIE)
                        </h2>
                        <p>
                        Our skilled team of evaluators can conduct a comprehensive monolingual and/or bilingual full and individual evaluation in order to collect information about your child’s special learning strength and needs.
                        </p>
                    </div>
                </div>

                <div className={styles.serviceContainer}>
                    <div className={styles.serviceHeader}>
                        <Image src={RightArrow.src} alt="Arrow" width={20} height={20} />
                        <h2>Therapy</h2>      
                    </div>
                    <div className={styles.specificService}>
                        <h2 className={styles.specificServiceHeader}>
                        Speech Therapy
                        </h2>
                        <p>
                        Our specialized staff of licensed and certified speech-language pathologists and speech-pathologist assistants can provide your school district with skilled speech therapy services.
                        </p>
                    </div>

                    <div className={styles.specificService}>
                        <h2 className={styles.specificServiceHeader}>
                        Occupational Therapy
                        </h2>
                        <p>
                        Our specialized staff of licensed and registered occupational therapists and certified occupational therapist assistants can provide your school district with evaluations and skilled services that focus on academic and social participation, self-care skills, and transition/work skills.
                        </p>
                    </div>
                </div>

                <div className={styles.serviceContainer}>
                    <div className={styles.serviceHeader}>
                        <Image src={RightArrow.src} alt="Arrow" width={20} height={20} />
                        <h2>Other Services</h2>      
                    </div>
                    <div className={styles.specificService}>
                        <h2 className={styles.specificServiceHeader}>
                        ARD Facilitation
                        </h2>
                        <p>
                        Our team of ARD (Admission, Review, and Dismissal) Facilitators are responsible for the planning and preparing of compliance documents for students eligible for Special Education services.
                        </p>
                    </div>

                    <div className={styles.specificService}>
                        <h2 className={styles.specificServiceHeader}>
                        Special Education Teacher Consultation
                        </h2>
                        <p>
                        Our certified staff can assist in the development of goals and objectives, accommodations, and services as part of the Individualized Educational Program (IEP).
                        </p>
                    </div>
                </div>

                <div className={styles.contactContainer}>
                    <div className={styles.contactFormContainer}>
                        <h2><span className={styles.blueText}>Contact Us</span></h2>
                        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                        {!successMessage && <>
                        <p className={styles.desktopText}>Fill out the form below, and we&apos;ll<br/> get back to you as soon as possible.</p>
                        <p className={styles.mobileText}>Fill out the form below, and we&apos;ll get back to you as soon as possible.</p>
                        </>}
                        
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
                    <Image src={ContactImage.src} alt="Contact" width={400} height={400} className={styles.contactImage}/>
                </div>
            </main>
            <Footer />
        </>
    );
}