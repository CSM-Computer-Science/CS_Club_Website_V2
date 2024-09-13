import Image from 'next/image';
import styles from '@/Pages/Timeline.module.css';

export default function Timeline() {
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Check out our growth over the last couple of years!</h3>
                </div>
                <ul className={styles.timeline}>
                    <TimelineItem
                    date="2022-Present"
                    heading="Our Humble Beginnings"
                    body="Upon enrolling at CSM, co-founders Brendan and Edan dedicated 
                        themselves to creating a thriving computer science community
                        centered on growth and learning"
                    imgSrc="/images/presidential.png"
                    altText="Presidential"
                    />

                    <TimelineItemInverted
                    date="November 2022"
                    heading="Mentorship Program"
                    body="We proudly established our first of two mentorship 
                        programs with Aragon high school robotics team, 
                        fostering innovation in the next generation of engineers."
                    imgSrc="/images/robotics.png"
                    altText="Robotics"
                    />

                    <TimelineItem
                    date="August 2023"
                    heading="Year Two"
                    body="Thank you to our incredible community for making our 
                        second year unforgettable, as we celebrate the tremendous 
                        growth with a continuous growth of passionate members!"
                    imgSrc="/images/meeting.jpg"
                    altText="Meeting"
                    />

                    <TimelineItemInverted
                    date="November 2023"
                    heading="Inaugural Hackathon"
                    body="Our school's first ever hackathon! Organized with the help
                        of our club, MESA, CC Stem Association, and ProjecTech to 
                        bring together innovative minds and foster creativity."
                    imgSrc="/images/kid_on_computer.JPG"
                    altText="Kid on Computer"
                    />

                    <TimelineItem
                    date="September 2024"
                    heading="Year Three"
                    body="Third year start off to a strong start, with a continuous growth 
                        of passionate members we have a lot more planned for the future. 
                        We want to thank our founding/past leadership (President) Edan Barrios 
                        and (Vice-President) Brendan Keane for setting the foundation for years to come!"
                    imgSrc="/images/sept2024meeting.jpg"
                    altText="September 2024 Meeting"
                    />
                    <li className={styles.timeline_inverted}>
                        <div className={styles.timeline_image}>
                            <h4>Be Part<br />Of Our<br />Story!</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

function TimelineItem({ date, heading, body, imgSrc, altText }) {
    return (
        <li>
            <div className={styles.timeline_image}>
                <Image
                    className={styles.image}
                    src={imgSrc}
                    alt={altText}
                    width={150}
                    height={150}
                />
            </div>
            <div className={styles.timeline_panel}>
                <div className={styles.timeline_heading}>
                    <h4>{date}</h4>
                    <h4 className="subheading">{heading}</h4>
                </div>
                <div className={styles.timeline_body}>
                    <p className="text-muted">{body}</p>
                </div>
            </div>
        </li>
    );
}

function TimelineItemInverted({ date, heading, body, imgSrc, altText }) {
    return (
        <li className={styles.timeline_inverted}>
            <div className={styles.timeline_image}>
                <Image
                    className={styles.image}
                    src={imgSrc}
                    alt={altText}
                    width={150}
                    height={150}
                />
            </div>
            <div className={styles.timeline_panel}>
                <div className={styles.timeline_heading}>
                    <h4>{date}</h4>
                    <h4 className="subheading">{heading}</h4>
                </div>
                <div className={styles.timeline_body}>
                <p className="text-muted">{body}</p>
                </div>
            </div>
        </li>
    );
}
