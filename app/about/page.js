import styles from './about.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Headshot from "../../public/Headshot.svg";
import Image from "next/image";
import ArrowOne from "../../public/Arrow_One.svg";
import ArrowTwo from "../../public/Arrow_Two.svg";

export default function About(){
    return (
        <>
        <Header />
        <main className={styles.aboutContainer}>
            <Image src={ArrowOne.src} alt="Arrow" width={100} height={100} className={styles.arrowOne}/>
            <Image src={ArrowTwo.src} alt="Arrow" width={100} height={100} className={styles.arrowTwo}/>
            <div className={styles.aboutStoryContainer}>
                <Image src={Headshot.src} alt="Headshot" width={400} height={400} className={styles.aboutProfileImage}/>
                <div className={styles.aboutStoryContainerText}>
                    <h2><span className={styles.blueText}>About Dr. Kidd</span> </h2>
                    <p className={styles.desktopText}>Dr. Kidd is a bilingual educational diagnostician who earned her Bachelor’s Degree in<br/>
                        Education with a minor in Elementary Education studies from the Pontifical Catholic<br/>
                        University. She earned her first Master’s Degree in Special Education with a major<br/>
                        in Mild to Moderate Learning Disabilities from Tennessee State University and a second<br/>
                        Master’s Degree in Special Education with a major in Educational Diagnostician from<br/>
                        Texas Tech University.<br/>
                        <br/>
                        She received her Ph.D. in Special Education from Texas Tech University; her<br/>
                        research interests include special education assessment and referral processes for<br/>
                        English language learners.<br/>
                        <br/>
                        Dr. Kidd is a certified general education teacher, dual language and special education<br/>
                        teacher. In addition to that, Dr. Kidd is a Wilson Reading Specialist, Level I Certified<br/>
                        Teacher with over 18 years of experience in the classroom.<br/>
                        <br/>
                        She has also been working as an educational Diagnostician for the last 6 years and has <br/>
                        worked with a variety of populations. She has had the opportunity to be part of a<br/>
                        variety of assessment teams that include Transdisciplinary Play-Based Assessments<br/>
                        (TPBA), specific learning disabilities, and other health impairments evaluations, both<br/>
                        monolingual and bilingual (Spanish/English) while following TEA guidelines.</p>

                    <p className={styles.mobileText}>
                    Dr. Kidd is a bilingual educational diagnostician who earned her Bachelor’s Degree in
                        Education with a minor in Elementary Education studies from the Pontifical Catholic
                        University. She earned her first Master’s Degree in Special Education with a major
                        in Mild to Moderate Learning Disabilities from Tennessee State University and a second
                        Master’s Degree in Special Education with a major in Educational Diagnostician from
                        Texas Tech University.
                        <br/><br/>
                        She received her Ph.D. in Special Education from Texas Tech University; her
                        research interests include special education assessment and referral processes for
                        English language learners.
                        <br/><br/>
                        Dr. Kidd is a certified general education teacher, dual language and special education
                        teacher. In addition to that, Dr. Kidd is a Wilson Reading Specialist, Level I Certified
                        Teacher with over 18 years of experience in the classroom.
                        <br/><br/>
                        She has also been working as an educational Diagnostician for the last 6 years and has worked with a variety of populations. She has had the opportunity to be part of a
                        variety of assessment teams that include Transdisciplinary Play-Based Assessments
                        (TPBA), specific learning disabilities, and other health impairments evaluations, both
                        monolingual and bilingual (Spanish/English) while following TEA guidelines.
                    </p>
                </div>
            </div>
        </main>
        <Footer />
        </>
        
    );
}