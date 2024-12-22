import React, { useState, useRef, useEffect } from 'react';
import "./medplan.css"
import medbground from "../images/medbground.webp";
import medoldpeople from "../images/medoldpeople.webp";
import medcycling from "../images/medcycling.png";
import healthdoc from "../images/healthdoc.webp";
import iphonehlth from "../images/iphonehlth.webp";
import iphonelang from "../images/iphonelang.webp";
import iphonetrk from "../images/iphonetrk.png";
import medtrad from "../images/medtrad.webp";
import iphonerecord from "../images/iphonerecord.webp";
import recordguy from "../images/recordguy.webp";
import medpatientgrp from "../images/medpatientgrp.png";
import padlock from "../images/padlock.webp";
import telemed from "../images/telemed.webp";
import statistics from "../images/statistics.png";
import iphonedownload from "../images/iphonedownload.webp";
import appstore from "../images/appstore.png";
import playstore from "../images/googleplay.png";
import mobilebground from "../images/mobilebground.png";
import story1 from "../images/story1.png";
import story2 from "../images/story2.webp";
import story3 from "../images/story3.webp";
import medvr from "../images/medvr.webp";
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const Medplan = () => {
    const stories = [
        {
            para1: "I love how MedPlan combines reminders and education. It’s not just about taking your medicine; it’s about understanding why it’s important.",
            para2: "The Yoruba articles helped my mum learn more about her condition too. Thank you for making this app!",
            name: "Funke, Ibadan",
            image: story1
        },
        {
            para1: "I love how MedPlan combines reminders and education. It’s not just about taking your medicine; it’s about understanding why it’s important.",
            para2: "The Yoruba articles helped my mum learn more about her condition too. Thank you for making this app!",
            name: "Funke, Ibadan",
            image: story2
        },
        {
            para1: "With MedPlan, I finally feel in control of my health. I can ask the pharmacist questions anytime, and they always give clear answers. ",
            para2: "The articles in Hausa have helped my family understand our health better too. This app is a game-changer!",
            name: "Abdullahi, Kano",
            image: story3
        },

    ]


    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        let scrollAmount = 0;
        const scrollSpeed = 1;

        const scroll = () => {
            if (!scrollContainer) return;
            scrollAmount += scrollSpeed;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
        };
        const interval = setInterval(scroll, 40);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='medplan-main'>
            <Navbar />
            <div className='medplan-background'>
                <img
                    src={medbground}
                    width="100%"
                    height="100%"
                    alt='icon'
                    className='bground-desktop'
                />
                <img
                    src={mobilebground}
                    width="100%"
                    height="100%"
                    alt='icon'
                    className='bground-prt'
                />
            </div>
            <div className='medplan-details'>
                <h1>Empowering Smarter Health Decisions Every Day</h1>
                <p>MedPlan app combines education and expert support in one app fostering medication
                    adherence and health literacy. Our aim is to empower individuals to take charge of
                    their health and live healthier lives by making informed decisions.
                </p>
            </div>
            <div className='medplan-med-containers'>
                <div className='medplan-container-info'>
                    <h1>Medication Reminder</h1>
                    <div className='medplan-props-container'>
                        <div className='med-rem-props'>
                            <div className='med-rem-ctn'>
                                <div className='med-props-text'>
                                    <h6>Stay on track</h6>
                                    <h1>Seamlessly manage your medication journey</h1>
                                </div>
                                <img
                                    src={medoldpeople}
                                    width="100%"
                                    height="100%"
                                    alt='icon'
                                />
                            </div>
                            <div className='med-rem-ctn2'>
                                <img
                                    src={iphonetrk}
                                    width="100%"
                                    height="100%"
                                    alt='icon'
                                />
                                <h5>Stay on track</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='medplan-container-info1'>
                    <h1>Health Diary</h1>
                    <div className='medplan-props-container'>
                        <div className='med-health-props'>
                            <div className='med-props-text1'>
                                <h3>Take Charge of Your Health</h3>
                                <h1>Track your health journey with ease.</h1>
                                <p>Effortlessly document your symptoms, track side effects, and monitor
                                    your health journey all in one place. Our health diary empowers you to stay
                                    informed about your well-being, identify patterns, and share accurate details
                                    with your healthcare provider for better-informed decisions and personalized care.
                                </p>
                                <h2>Take Charge of Your Health</h2>
                            </div>
                            <div className='med-health-img'>
                                <img
                                    src={iphonehlth}
                                    width="100%"
                                    height="100%"
                                    alt='icon'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='med-health-container'>
                    <div className='med-health-ctn'>
                        <h2>Share with intention</h2>
                        <p>By choosing to share your journey, you gain access to
                            valuable guidance from professionals who can provide personalized
                            recommendations based on your unique health data. Additionally,
                            you can select health companions to support your treatment journey,
                            offering reminders to take your medications and helping you stay on
                            track with your care plan.
                        </p>
                        <img
                            src={healthdoc}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                    <div className='med-health-ctn2'>
                        <h2>Crush your health goals</h2>
                        <img
                            src={medcycling}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                        <p>Monitor progress, <br />
                            Stay motivated, and <br />
                            Reach your health goals. <br />
                        </p>
                    </div>
                </div>
                <div className='medplan-container-info2'>
                    <h1>Multilang Health Insights</h1>
                    <div className='med-lang-props'>
                        <div className='med-lang-ctn'>
                            <p>Connect and find support</p>
                            <img
                                src={medpatientgrp}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                            <h1>Learn Better, <br />
                                Live Healthier – <br />
                                In the Language You Love. <br />
                            </h1>
                        </div>
                        <div className='med-lang-ctn1'>
                            <h2>Health Care in Your Native Language</h2>
                            <p>We believe that everyone deserves access to clear and helpful
                                health information, no matter their background. That’s why we
                                provide educational articles & videos designed to foster health
                                literacy in Nigeria's three major languages—Hausa, Yoruba, and
                                Igbo—as well as in Pidgin English. Our goal is to make essential
                                health knowledge relatable and easy to understand, empowering you
                                to make informed decisions for a healthier life.
                            </p>
                            <img
                                src={medtrad}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />

                        </div>
                    </div>
                </div>
                <div className='medplan-props-container'>
                    <div className='med-health-props'>
                        <div className='med-props-texter'>
                            <h4>Get health advice at your finger tips</h4>
                            <h1>A more interesting way to get health tips</h1>
                            <p>
                                Is reading starting to feel like a snooze fest? We've got an exciting
                                alternative to keep you informed. Enjoy a collection of video tips designed
                                to captivate your attention and empower your wellness journey.
                            </p>
                            <h3>Get health advice at your finger tips</h3>
                        </div>
                        <div className='med-health-img'>
                            <img
                                src={iphonelang}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                    </div>
                </div>
                <div className='medplan-container-info3'>
                    <h1>Health Records</h1>
                    <div className='med-props-container'>
                        <div className='med-record-ctn'>
                            <img
                                src={iphonerecord}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                        <div className='med-record-ctn1'>
                            <h2>Know your Numbers</h2>
                            <p>Access your health record <br /> anywhere anytime.</p>
                            <img
                                src={recordguy}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                    </div>
                </div>
                <div className='med-health-container'>
                    <div className='med-rec2-ctn'>
                        <h2>Take charge of your health</h2>
                        <p>Keep track of your health history and make informed
                            decision on your well being
                        </p>
                        <img
                            src={statistics}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                    <div className='med-rec2-ctn2'>
                        <h2>Your health is yours.</h2>
                        <img
                            src={padlock}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                        <p>No one else but you
                            can access your medical
                            records.
                        </p>
                    </div>
                </div>
                <div className='medplan-container-info4'>
                    <h1>Telepharmacy</h1>
                    <div className='med-props-container1'>
                        <div className='med-tele-ctn'>
                            <h3>Healthcare at Your Fingertips</h3>
                            <h1>24/7 Free Access to Pharmacists</h1>
                            <p>Enjoy free and easy access to expert medication advice
                                from pharmacists—your health questions answered, just a
                                message away!
                            </p>
                            <h2>Healthcare at Your Fingertips</h2>
                        </div>
                        <div className='med-tele-ctn2'>
                            <img
                                src={telemed}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='medplan-download'>
                <div className='med-dld-ctn'>
                    <img
                        src={iphonedownload}
                        width="100%"
                        height="100%"
                        alt='icon'
                    />
                </div>
                <div className='med-dld-ctn2'>
                    <div className='med-dld-ctn3'>
                        <a href=''>
                            <button>
                                Watch Demo Video
                            </button>
                        </a>
                        <h2>Get the MedPlan App</h2>
                    </div>
                    <a href=''>
                        <button>
                            Watch Demo Video
                        </button>
                    </a>
                    <h2>Get the MedPlan App</h2>
                    <p>Experience Holistic Healthcare <br /> Management.
                    </p>
                    <div className='download-btns'>
                        <a href='https://play.google.com/store/apps/details?id=com.medplan.solutions&pcampaignid=web_share'>
                            <img
                                src={playstore}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </a>
                        <a href=''>
                            <img
                                src={appstore}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className='medplan-stories'>
                <h2>Success Stories</h2>
                <h1>Empowering Smarter Health Decisions Every Day</h1>
                <p>Everyday our solutions are helping thousands of individuals take more informed decisions about their health.</p>
                <div className='med-success-stories' ref={scrollContainerRef}>
                    {[...stories, ...stories].map((story, index) => (
                        <div className='med-stories-ctn' key={index}>
                            <div className='stories-img'>
                                <img
                                    src={story.image}
                                    width="100%"
                                    height="100%"
                                    alt='next'
                                />
                            </div>
                            <div className='stories-text'>
                                <p>{story.para1}</p>
                                <p>{story.para2}</p>
                                <h2>{story.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='slide-indicators'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='medplan-innovation'>
                <div className='med-inv-img'>
                    <img
                        src={medvr}
                        width="100%"
                        height="100%"
                        alt='icon'
                    />
                </div>
                <div className='med-inv-text'>
                    <h2>Evidence-based Digital Health solution</h2>
                    <h1>Driving innovation & advancing Health outcomes through Research</h1>
                    <p>
                        In a randomized control trial with 2 months follow-up period, 200 patients
                        receiving drug therapy for glaucoma were  randomized into either into a control
                        or study group. The study group comprised participants who made use of a medication
                        reminder mobile application, medPlan®, while the control group consisted of those patients
                        who did not use the application. Adherence to medication was measured............
                    </p>
                    <a href='https://www.ajol.info/index.php/tjpr/article/view/204731'>
                        <button>Read Full Paper</button>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Medplan